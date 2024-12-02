import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fffcd4',
    flex: 1,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#eaddca',
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    color: 'black',
  },
  drawerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eaddca',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#fefad7',
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  linkText: {
    color: '#0066cc',
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  googleButton: {
    width: '80%',
    padding: 10,
    backgroundColor: '#db4437',
    borderRadius: 5,
  },
  dontHaveAccount: {
    marginTop: 10,
    marginBottom: 20,
  },
  dontHaveAccountText: {
    fontSize: 14,
    color: '#0066cc',
    textAlign: 'left',
  },
});

export default styles;
