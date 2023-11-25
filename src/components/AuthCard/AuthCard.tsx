import { View, Text } from 'react-native'
import React from 'react'
import { AuthStyles } from '../../styles/AuthStyles';

interface card{
    children:any;
    customStyle?:object;
}
const AuthCard = (props: card) => {
  return (
    <View style={[props.customStyle, AuthStyles.card]}>
     {props.children}
    </View>
  )
}

export default AuthCard