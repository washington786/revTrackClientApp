import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { ButtonWrapper, ContentWrapper, Wrapper } from "./Login";
import { GlobalColors } from "../../infastructure/GlobalColors";
import GlobalInput from "../../components/Globals/GlobalInput";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  const onSignIn=()=>{
    navigation.navigate('login');
  }

  const onToOTP = () => {
    navigation.navigate('otp');
  };

  return (
    <AuthWrapper>
      <KeyboardAvoidingView>
        <View>
          <Wrapper>
            <ContentWrapper
              title={"create an account"}
              paragraph={"create a new account by entering valid credentials."}
            />
            <InputWrapper />

            <ButtonWrapper
              color={GlobalColors.primary.darkGreen}
              mode="contained"
              title={"create account"}
              onPress={onToOTP}
              loading={false}
            />

            <ButtonWrapper
              mode="outlined"
              title={"sign in"}
              onPress={onSignIn}
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
    <>
      <GlobalInput
        placeHolder="first name"
        keyboardType="default"
        icon="account"
      />
      <GlobalInput
        placeHolder="last name"
        keyboardType="default"
        icon="account"
      />
      <GlobalInput
        placeHolder="email address"
        keyboardType="email-address"
        icon="email"
      />
      <GlobalInput
        placeHolder="city"
        keyboardType="default"
        icon="map-marker-radius"
      />
      <GlobalInput
        placeHolder="phone number"
        keyboardType="phone-pad"
        icon="phone"
      />
      <GlobalInput placeHolder="password" keyboardType="password" icon="lock" />
    </>
  );
}
export default Register;
