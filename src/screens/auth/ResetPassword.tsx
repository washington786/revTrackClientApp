import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { ButtonWrapper, ContentWrapper, Wrapper } from "./Login";
import { GlobalColors } from "../../infastructure/GlobalColors";
import GlobalInput from "../../components/Globals/GlobalInput";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

const ResetPassword = () => {
  const navigation = useNavigation();

  const onToLogin = () => {
    navigation.goBack();
  };

  return (
    <AuthWrapper>
      <KeyboardAvoidingView>
        <View>
          <Appbar.Header
            style={{ marginTop: isAndroid ? -30 : -45, marginLeft: -9 }}
          >
            <Appbar.BackAction onPress={onToLogin} />
          </Appbar.Header>

          <Wrapper>
            <ContentWrapper
              title={"Forgot your password?"}
              paragraph={
                "enter your registered email address to receive a link to reset your password in no time."
              }
            />
            <InputWrapper />

            <ButtonWrapper
              color={GlobalColors.primary.darkGreen}
              mode="contained"
              title={"submit"}
              onPress={()=>{}}
              loading={false}
            />

            <ButtonWrapper
              mode="outlined"
              title={"sign in"}
              onPress={onToLogin}
              loading={false}
            />
          </Wrapper>
        </View>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

function InputWrapper() {
  return (
    <GlobalInput
      placeHolder="email address"
      keyboardType="email-address"
      icon="email"
    />
  );
}
export default ResetPassword;
