import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../screens/Main/Settings";
import MainWrapper from "../../components/MainWrapper/MainWrapper";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <MainWrapper>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="setting"
      >
        <Stack.Screen name="setting" component={Settings} />
      </Stack.Navigator>
    </MainWrapper>
  );
};

export default SettingsStack;
