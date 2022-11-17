
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreen/WelcomeScreen';
import LoginSignupScreen from './src/screens/LoginSignupScreen/LoginScreen';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return (
   <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

