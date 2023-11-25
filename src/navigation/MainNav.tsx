import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack from '../stacks/MainStack'

const MainNav = () => {
  return (
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  )
}

export default MainNav