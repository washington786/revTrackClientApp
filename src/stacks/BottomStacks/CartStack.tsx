import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Cart from "../../screens/Main/Cart";

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <MainWrapper>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="shopping-cart"
      >
        <Stack.Screen name="shopping-cart" component={Cart} />
      </Stack.Navigator>
    </MainWrapper>
  );
};

export default CartStack;
