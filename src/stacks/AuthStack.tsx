import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Welcome from '../screens/auth/Welcome';
import Register from '../screens/auth/Register';
import ResetPassword from '../screens/auth/ResetPassword';
import Splash from '../screens/auth/Splash';
import OneTimePin from '../screens/auth/OneTimePin';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='welcome'>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='welcome' component={Welcome}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name='reset' component={ResetPassword}/>
        <Stack.Screen name='splash' component={Splash}/>
        <Stack.Screen name='otp' component={OneTimePin}/>
    </Stack.Navigator>
  )
}

export default AuthStack