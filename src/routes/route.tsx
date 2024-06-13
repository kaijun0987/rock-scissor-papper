import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TGameDifficulty} from '../types/gamedifficulty';

export type RootStackParamList = {
  Home: undefined;
  Game: {difficulty: TGameDifficulty};
};

export type GameProps = NativeStackScreenProps<RootStackParamList, 'Game'>;
