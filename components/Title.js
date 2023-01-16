import { StyleSheet, Text } from 'react-native';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb20f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb20f',
    padding: 12,
  },
});
