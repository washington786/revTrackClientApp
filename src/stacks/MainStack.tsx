import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import AuthenticatedStack from './AuthenticatedStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }} initialRouteName='auth'>
        <Stack.Screen name='auth' component={AuthStack}/>
        <Stack.Screen name='dashboard' component={AuthenticatedStack}/>
    </Stack.Navigator>
  )
}

export default MainStack