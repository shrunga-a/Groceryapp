import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen'
import SignUpScreen from './SignUpScreen'
import LoginScreen from './LoginScreen'
import HomeScreen from '../HomeScreen';
import Mycart from '../Mycart';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Welcomepage'>
    <Stack.Screen name="Welcomepage" component={WelcomeScreen} 
    options={{headerShown: false}}
    />
    <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown: false}}/>
    <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    {/*<Stack.Screen name="Mycart" component={Mycart} options={{headerShown:false}}/>*/}
    
  </Stack.Navigator>
    
  )
}

export default AuthNavigation
