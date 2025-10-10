import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b9b9bff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  Header: {
    backgroundColor: '#386377',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    marginBottom: 30,
  },

  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0C782',
    textAlign: 'center',
  },

  input: {
    width: '100%',
    maxWidth: 300,
    height: 40,
    backgroundColor: '#2E3B4E',
    color: '#ffffff',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#386377',
    borderRadius: 4,
    fontSize: 16,
  },

  button: {
  marginTop: 10, // space between buttons
  width: 150, // optional: make them same width
  alignSelf: "center", // center buttons},
  },

  userCon: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },

  Card: {
    backgroundColor: '#ffffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },

  BText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },

  SText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },

});
