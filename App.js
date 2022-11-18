
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreen/WelcomeScreen';
//import LoginSignupScreen from './src/screens/LoginSignupScreen/LoginScreen';
import LoginScreen from './src/screens/LoginSignupScreen/LoginScreen'
import SignUpScreen from './src/screens/LoginSignupScreen/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack =createNativeStackNavigator();
  return (
  //  <RootNavigation/>

  <NavigationContainer>
  <Stack.Navigator initialRouteName='Welcomepage'>
    <Stack.Screen name="Welcomepage" component={WelcomeScreen} 
    options={{headerShown: false}}
    />
    <Stack.Screen name="Signup" component={SignUpScreen} 
    options={{headerShown: false}} />
    <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerShown: false}} />
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    {/*<Stack.Screen name="Mycart" component={Mycart} options={{headerShown:false}}/>*/}
    
  </Stack.Navigator>
  
  </NavigationContainer>

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

