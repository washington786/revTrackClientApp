import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import { AuthStyles } from "../../styles/AuthStyles";

interface wrapper {
  children: any;
}
const isAndroid = Platform.OS === "android";

const AuthWrapper = (props: wrapper) => {
  return (
    <SafeAreaView
      style={[
        AuthStyles.wrapper,
        { paddingTop: isAndroid ? StatusBar.currentHeight : 0 },
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default AuthWrapper;
