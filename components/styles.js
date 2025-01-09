import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070F2B',
  },
  header: {
    backgroundColor: '#9290C3',
    padding: 20,
    alignItems: 'center',
    borderEndEndRadius: 20,
    borderBottomLeftRadius: 20,

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    padding: 5,
    marginBottom: 5,
    borderBottomColor: '#1B1A55',
    borderBottomWidth: 2,
    borderStyle: 'double',
  },
  className: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 700,
    padding: 5,
    marginBottom: 5,
    borderBottomColor: '#1B1A55',
    borderBottomWidth: 2,
    borderStyle: 'double'
  },
  date: {
    fontSize: 18,
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    padding: 10,
    width: windowWidth,
    borderRadius:20,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginHorizontal: 2,
    borderColor: '#535C91',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: (windowWidth - 20) / 2,
    placeholderTextColor: '#1B1A55',
  },
  list: {
    flex: 1,
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1B1A55',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 2,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  studentGroup: {
    fontSize: 14,
    color: '#9290C3',
  },
  presentButton: {
    backgroundColor: '#9290C3',
    padding: 10,
    borderRadius: 10,
  },
  presentButtonActive: {
    backgroundColor: '#070F2B',
  },
  presentButtonText: {
    color: 'white',
  },
  presentButtonTextActive: {
    color: 'white',
  },
  footer: {
    padding: 20,
    backgroundColor: '#9290C3',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderTopColor: '#e0e0e0',
  },
  presentCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 5,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  copyButton: {
    backgroundColor: '#070F2B',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  resetButton: {
    backgroundColor: '#1B1A55',
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