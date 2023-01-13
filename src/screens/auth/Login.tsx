import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import GlobalInput from "../../components/Globals/GlobalInput";
import { Button, Paragraph, Title } from "react-native-paper";
import { AuthStyles } from "../../styles/AuthStyles";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../../infastructure/GlobalColors";

const Login = () => {
  const navigation = useNavigation();

  const onTransitReset = () => {
    navigation.navigate("reset");
  };
  const onTransitRegister = () => {
    navigation.navigate("register");
  };

  const onToOTP = () => {
    navigation.navigate("otp");
  };

  return (
    <AuthWrapper>
      <KeyboardAvoidingView>
        <View>
          <Wrapper>
            <ContentWrapper
              title={"login into account"}
              paragraph={"enter your registered phone number to login."}
            />
            <InputWrapper />
            <ResetTextWrapper onPress={onTransitReset} />

            <ButtonWrapper
              color={GlobalColors.primary.darkGreen}
              mode="contained"
              title={"Sign In"}
              onPress={onToOTP}
              loading={false}
            />

            <ButtonWrapper
              mode="outlined"
              title={"create account"}
              onPress={onTransitRegister}
              loading={false}
            />
          </Wrapper>
        </View>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

export function ContentWrapper({ title, paragraph }) {
  return (
    <View style={AuthStyles.loginsContentWrapper}>
      <Title style={AuthStyles.contentTitle}>{title}</Title>
      <Paragraph style={AuthStyles.contentParagraph}>{paragraph}</Paragraph>
    </View>
  );
}
export function Wrapper({ children }) {
  return <View style={AuthStyles.loginWrapper}>{children}</View>;
}

function InputWrapper() {
  return <GlobalInput placeHolder="phone number" keyboardType="phone-pad" icon="phone"/>;
}

function ResetTextWrapper({ onPress }) {
  const title = "forgot your password?";
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <Title style={AuthStyles.resetText}>{title}</Title>
    </TouchableOpacity>
  );
}

interface Btn {
  title?: string;
  mode?: string;
  color?: string;
  onPress?(): {};
  loading?:boolean
}

export function ButtonWrapper(props: Btn) {
  return (
    <Button
      mode={props.mode}
      buttonColor={props.color}
      style={AuthStyles.btnLogin}
      uppercase={true}
      labelStyle={AuthStyles.btnLabel}
      textColor={
        props.mode === "outlined"
          ? GlobalColors.primary.darkGreen
          : GlobalColors.white
      }
      onPress={props.onPress}
      loading={props.loading}
    >
      {props.title}
    </Button>
  );
}
export default Login;
