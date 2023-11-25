import React from "react";

import Search from "../screens/Main/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalColors } from "../infastructure/GlobalColors";
import StoreStack from "./BottomStacks/StoreStack";
import SettingsStack from "./BottomStacks/SettingsStack";
import CartStack from "./BottomStacks/CartStack";

const Tabs = createBottomTabNavigator();

const TAB_ICONS = {
  dashboard: "storefront-outline",
  map: "search",
  schedule: "shopping-cart",
  settings: "user",
};

const AuthenticatedStack = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: GlobalColors.primary.darkGreen,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name="home"
          component={StoreStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={TAB_ICONS.dashboard} size={20} color={color} />
            ),
            tabBarLabel: "Store",
          }}
        />
        <Tabs.Screen
          name="search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name={TAB_ICONS.map} size={20} color={color} />
            ),
            tabBarLabel: "Search",
          }}
        />
        <Tabs.Screen
          name="cart"
          component={CartStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name={TAB_ICONS.schedule} size={20} color={color} />
            ),
            tabBarLabel: "Cart",
          }}
        />
        <Tabs.Screen
          name="settings"
          component={SettingsStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icons name={TAB_ICONS.settings} size={20} color={color} />
            ),
            tabBarLabel: "Settings",
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default AuthenticatedStack;
