import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

export default function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>업 & 다운 숫자 게임</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Game Screen!</Text>
        {/* <Text>+ -</Text> */}
      </View>
      {/* <View>게임 로그</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
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
