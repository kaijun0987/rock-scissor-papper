import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../routes/route';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

function HomeScreen(): React.JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.body}>
        <Text style={styles.title}>WELCOME TO ROSHAMBO</Text>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('Game', {difficulty: 'EasyLevel'})
          }>
          <Text style={styles.buttonText}>Easy Level</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('Game', {difficulty: 'HardLevel'})
          }>
          <Text style={styles.buttonText}>Hard Level</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 32,
    backgroundColor: '#1F3757',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 130,
  },
  button: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
    backgroundColor: '#1F3757',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '600',
  },
});

export default HomeScreen;
