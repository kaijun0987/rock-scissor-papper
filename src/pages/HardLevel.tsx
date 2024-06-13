import React, {useState} from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {CloseIcon, RulesBonusIcon} from '../../public/assets';
import FadeInView from '../animations/FadeInVIew';
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '../constants/ScreenUtils';
import useGameUtils from '../constants/GameUtils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/route';
import {GameButton, Header} from '../components';

function HardLevelScreen(): React.JSX.Element {
  const [isModalVisbile, setModalVisible] = useState(false);
  const {
    score,
    userSelect,
    aiSelect,
    userStatus,
    handleUserSelect,
    handlePlayAgainButton,
  } = useGameUtils('HardLevel');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (isModalVisbile) {
    return (
      <Modal style={styles.modal}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Rules</Text>
          <View style={styles.modalRulesSection}>
            <RulesBonusIcon />
          </View>
          <Pressable onPress={() => setModalVisible(false)}>
            <CloseIcon />
          </Pressable>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header onClickBackButton={() => navigation.navigate('Home')} />
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.title}>
            ROCK{'\n'}PAPER{'\n'}SCISSOR{'\n'}LIZARD{'\n'}SPOCK
          </Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>
              score{'\n'}
              <Text style={styles.scoreNumber}>{score}</Text>
            </Text>
          </View>
        </View>
        {userSelect ? (
          <View style={styles.gameSection}>
            <View style={styles.row}>
              <View style={styles.column}>
                <GameButton
                  style={styles.gameSelectedButton}
                  gameButtonType={userSelect}
                  gameLevel="Hard"
                />
                <Text style={styles.defaultText}>YOU PICKED</Text>
              </View>
              <View style={styles.column}>
                {!aiSelect ? (
                  <GameButton
                    style={styles.gameSelectedButton}
                    gameLevel="Hard"
                  />
                ) : (
                  <FadeInView>
                    <GameButton
                      gameLevel="Hard"
                      style={styles.gameSelectedButton}
                      gameButtonType={aiSelect}
                    />
                  </FadeInView>
                )}
                <Text style={styles.defaultText}>THE HOUSE PICKED</Text>
              </View>
            </View>
            {userStatus ? (
              <FadeInView>
                <View style={styles.userStatusSection}>
                  <Text style={styles.userStatusText}>
                    {userStatus === 'win' && 'YOU WIN'}
                    {userStatus === 'lose' && 'YOU LOSE'}
                    {userStatus === 'draw' && 'DRAW'}
                  </Text>
                  <Pressable onPress={() => handlePlayAgainButton()}>
                    <View style={styles.userStatusButton}>
                      <Text style={styles.userStatusButtonText}>
                        PLAY AGAIN
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </FadeInView>
            ) : (
              <View style={styles.userStatusSection} />
            )}
          </View>
        ) : (
          <View style={styles.gameSection}>
            <ImageBackground
              style={{
                height: actuatedNormalizeVertical(220),
                width: actuatedNormalize(220),
              }}
              source={require('../assets/images/bg-polygon.png')}>
              <GameButton
                style={styles.scissorButton}
                gameButtonType={'scissor'}
                gameLevel="Hard"
                onClick={() => handleUserSelect('scissor')}
              />
              <GameButton
                style={styles.spockButton}
                gameButtonType={'spock'}
                gameLevel="Hard"
                onClick={() => handleUserSelect('spock')}
              />
              <GameButton
                style={styles.paperButton}
                gameButtonType={'paper'}
                gameLevel="Hard"
                onClick={() => handleUserSelect('paper')}
              />
              <GameButton
                style={styles.lizardButton}
                gameButtonType={'lizard'}
                gameLevel="Hard"
                onClick={() => handleUserSelect('lizard')}
              />
              <GameButton
                style={styles.rockButton}
                gameButtonType={'rock'}
                gameLevel="Hard"
                onClick={() => handleUserSelect('rock')}
              />
            </ImageBackground>
          </View>
        )}
        <Pressable
          style={styles.rulesButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.rulesButtonText}>RULES</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1F3757',
  },
  body: {
    paddingHorizontal: 32,
    paddingVertical: 32,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 23,
    paddingVertical: 24,
    alignItems: 'center',
  },
  defaultText: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 32,
    fontWeight: '700',
  },
  title: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 21,
    // lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Barlow Semi Condensed',
    alignSelf: 'center',
  },
  scoreContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 14,
    minWidth: 75,
    margin: 'auto',
  },
  scoreText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 10,
    textAlign: 'center',
  },
  scoreNumber: {
    color: '#565468',
    fontWeight: '700',
    fontSize: 40,
    paddingHorizontal: 1,
    textAlign: 'center',
  },
  gameSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rulesButton: {
    margin: 'auto',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 38,
    borderRadius: 8,
  },
  rulesButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: '600',
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalView: {
    flex: 1,
    paddingVertical: 95,
    paddingHorizontal: 3,
    alignItems: 'center',
  },
  modalText: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 32,
    color: '#3B4262',
  },
  modalRulesSection: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    marginHorizontal: actuatedNormalize(10),
    alignItems: 'center',
  },
  scissorButton: {
    left: 67,
    top: -50,
  },
  spockButton: {
    left: -40,
    top: 35,
  },
  paperButton: {
    right: -40,
    top: 35,
  },
  lizardButton: {
    left: 0,
    bottom: -40,
  },
  rockButton: {
    right: 0,
    bottom: -40,
  },
  gameSelectedButton: {
    position: 'static',
    margin: 20,
  },
  userStatusSection: {
    alignItems: 'center',
    marginTop: 80,
    minHeight: 150,
  },
  userStatusText: {
    fontWeight: '700',
    fontSize: 56,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  userStatusButton: {
    backgroundColor: '#F3F3F3',
    width: 220,
    height: 48,
    justifyContent: 'center',
    borderRadius: 8,
  },
  userStatusButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3B4262',
    textAlign: 'center',
  },
});

export default HardLevelScreen;
