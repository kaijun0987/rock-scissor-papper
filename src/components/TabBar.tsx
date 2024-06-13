import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';

export function MyTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const focusedButton = {
          backgroundColor: isFocused ? '#FFFFFF' : '#1F3757',
        };

        const focustText = {
          color: isFocused ? '#1F3757' : '#FFFFFF',
        };

        return (
          <Pressable
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabButton, focusedButton]}>
            <Text style={[styles.tabText, focustText]}>{label.toString()}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    height: 50,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
