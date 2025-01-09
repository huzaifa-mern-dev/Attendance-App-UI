import { SafeAreaView, StyleSheet } from 'react-native';
import AttendanceApp from './components/AttendanceApp'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AttendanceApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
