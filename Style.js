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

});
