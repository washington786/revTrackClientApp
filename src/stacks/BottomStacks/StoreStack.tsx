import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../../screens/Main/Dashboard";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import StoreDetails from "../../screens/Main/home/StoreDetails";
import ProductDetails from "../../screens/Main/home/ProductDetails";
import ViewAllStores from "../../screens/Main/home/ViewAllStores";
import MyTabs from "../../screens/Main/TopTabs";

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <MainWrapper>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="store"
      >
        <Stack.Screen name="store" component={MyTabs} />
        <Stack.Screen name="storeDetails" component={StoreDetails} />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="allStores" component={ViewAllStores} />
      </Stack.Navigator>
    </MainWrapper>
  );
};

export default StoreStack;
