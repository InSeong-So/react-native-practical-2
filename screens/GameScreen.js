import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/colors';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>업 & 다운 숫자 게임</Title>
      {/* <Text>추측하기</Text> */}
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
