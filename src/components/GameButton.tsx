import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {TGameType} from '../types/gametype';

type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  onClick?: () => void;
  gameButtonType?: TGameType;
  gameLevel: 'Easy' | 'Hard';
};
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '../constants/ScreenUtils';

export function GameButton({
  style,
  onClick,
  gameButtonType,
  gameLevel,
}: ButtonProps) {
  const CustomIcon = createIconSetFromFontello(fontelloConfig);
  const dependingStyle = {
    borderColor:
      (gameButtonType === 'scissor' && '#EB9F0E') ||
      (gameButtonType === 'spock' && '#3FB7CD') ||
      (gameButtonType === 'paper' && '#4664F4') ||
      (gameButtonType === 'lizard' && '#834EE3') ||
      (gameButtonType === 'rock' && '#DB2E4D') ||
      '#1F3757',
    backgroundColor: gameButtonType ? '#F3F3F3' : '#0000001A',
    height:
      gameLevel === 'Easy'
        ? actuatedNormalizeVertical(133)
        : actuatedNormalizeVertical(98),

    width:
      gameLevel === 'Easy' ? actuatedNormalize(130) : actuatedNormalize(96),
  };

  return (
    <Pressable
      style={[styles.gameButton, style, dependingStyle]}
      onPress={onClick}>
      {gameButtonType === 'scissor' && (
        <CustomIcon
          name="icon-scissors"
          color={'#1F3757'}
          size={
            gameLevel === 'Easy' ? actuatedNormalize(60) : actuatedNormalize(40)
          }
        />
      )}
      {gameButtonType === 'spock' && (
        <CustomIcon
          name="icon-spock"
          color={'#1F3757'}
          size={actuatedNormalize(40)}
        />
      )}
      {gameButtonType === 'paper' && (
        <CustomIcon
          name="icon-paper"
          color={'#1F3757'}
          size={
            gameLevel === 'Easy' ? actuatedNormalize(60) : actuatedNormalize(40)
          }
        />
      )}
      {gameButtonType === 'lizard' && (
        <CustomIcon
          name="icon-lizard"
          color={'#1F3757'}
          size={actuatedNormalize(40)}
        />
      )}
      {gameButtonType === 'rock' && (
        <CustomIcon
          name="icon-rock"
          color={'#1F3757'}
          size={
            gameLevel === 'Easy' ? actuatedNormalize(50) : actuatedNormalize(32)
          }
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gameButton: {
    borderRadius: 100,
    borderWidth: 13,
    borderColor: '#1F3757',

    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
  },
});
