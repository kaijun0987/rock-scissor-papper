import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Pressable} from 'react-native';
import {MoveLeft} from 'lucide-react-native';

type THeaderProps = {
  onClickBackButton?: () => void;
};

export function Header({onClickBackButton}: THeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onClickBackButton}>
        <MoveLeft color={'#FFFFFF'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1F3757',
    flexDirection: 'row',
    top: StatusBar.currentHeight,
    paddingHorizontal: 15,
    height: 30,
    alignItems: 'center',
  },
});
