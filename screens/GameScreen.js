import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  // 이전 숫자보다 작다면 '작아요ㅠ' 라는 문자열
  // 이전 숫자보다 크다면 '크네요!!' 라는 문자열
  const nextGuessHandler = (direction) => {
    if (
      (direction === '작아요ㅠ' && currentGuess < userNumber) ||
      (direction === '크네요!!' && currentGuess > userNumber)
    ) {
      Alert.alert('거짓말 하지 마세요!', '뭐가 잘못된지 알고 계시겠죠?', [
        { text: '미안!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === '작아요ㅠ') maxBoundary = currentGuess;
    if (direction === '크네요!!') minBoundary = currentGuess + 1;

    const nextRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(nextRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>업 & 다운 숫자 게임</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>클까요? 작을까요?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, '크네요!!')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, '작아요ㅠ')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>게임 로그</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

const generateRandomBetween = (min, max, exclude) => {
  /**
   * Math.random은 숫자 하나를 배제한 채 0과 1 사이의 난수를 생성
   * 여기에 최댓값과 최솟값의 차이를 곱해서 0과 1 사이의 난수를 최댓값과 최솟값 사이 난수로 전환하는 것
   * Math.floor는 결과값보다 크지 않은 최대 정수를 반환한다. 위의 식은 소수 자리에 있는 십진수가 출력되므로
   * 우리가 원하는 정수를 Math.floor로 만들어낸다.
   * 소수 자리를 정리했으므로 하한값을 다시 더해준다. 0을 최솟값으로 얻지 않도록.
   * 이렇게 설정하지 않으면 Math.random의 결과값이 0일 때 최솟값도 0이 될 것이다.
   * 그러나 하한값을 정하면 여기에서 정의한 최솟값이 하한값이 될 것이다.
   */
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber === exclude ? generateRandomBetween(min, max, exclude) : randomNumber;
};
