import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  className: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: -2,
    padding: 10,
    width: windowWidth - 20,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 2,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: (windowWidth - 40) / 2,
  },
  list: {
    flex: 1,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 2,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  studentGroup: {
    fontSize: 14,
    color: 'gray',
  },
  presentButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  presentButtonActive: {
    backgroundColor: '#4caf50',
  },
  presentButtonText: {
    color: 'black',
  },
  presentButtonTextActive: {
    color: 'white',
  },
  footer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  presentCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copyButton: {
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  resetButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});