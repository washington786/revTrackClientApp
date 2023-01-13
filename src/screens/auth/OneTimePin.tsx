import { View, KeyboardAvoidingView } from "react-native";
import React, { Component, useEffect, useState } from "react";
import { ButtonWrapper, ContentWrapper, Wrapper } from "./Login";
import { GlobalColors } from "../../infastructure/GlobalColors";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { useNavigation } from "@react-navigation/native";

import OTPInputView from "@twotalltotems/react-native-otp-input";

import CountDown from "react-native-countdown-component";

const OneTimePin = () => {
  const navigation = useNavigation();

  const [isLoading,setIsLoading]= useState(false);

  const onToLogin=()=>{
    setIsLoading(!isLoading);
  }

  useEffect(()=>{
    setTimeout(()=>{
        onToLogin()
    },3000)
  },[]);

  const onDone = () => {
    alert("Your one time pin expired");
  };

  const onToMain=()=>{
    navigation.navigate('dashboard')
  }

  return (
    <AuthWrapper>
      <KeyboardAvoidingView>
        <View>
          <Wrapper>
            <ContentWrapper title={"ENTER OTP"} paragraph={"+27812767830"} />

            <OTPViewWrapper />

            <CountWrapper onFinished={onDone}/>

            <ButtonWrapper
              color={GlobalColors.primary.darkGreen}
              mode="contained"
              title={"submit"}
              onPress={onToMain}
              loading={false}
            />

            <ButtonWrapper
              mode="outlined"
              title={"resend pin"}
              onPress={onToLogin}
              loading={isLoading}
            />
          </Wrapper>
        </View>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

function OTPViewWrapper() {
  return (
    <OTPInputView
      style={{ width: "100%", height: 100, alignSelf: "center" }}
      pinCount={5}
      autoFocusOnLoad={true}
      codeInputFieldStyle={{ width: 60, height: 70 }}
      codeInputHighlightStyle={{
        width: 60,
        height: 70,
        borderColor: GlobalColors.primary.darkGreen,
      }}
      onCodeFilled={(code) => {
        console.log(`Code is ${code}, you are good to go!`);
      }}
      placeholderCharacter={"-"}
      placeholderTextColor={GlobalColors.grey.l5}
      editable={true}
      keyboardType={"number-pad"}
    />
  );
}

function CountWrapper({ onFinished }) {
  return (
    <CountDown
      size={20}
      until={60 * 2 + 30}
      onFinish={onFinished}
      digitStyle={{ backgroundColor: GlobalColors.whites.c1, borderWidth: 0 }}
      digitTxtStyle={{ color: GlobalColors.primary.level3Green }}
      timeLabelStyle={{ color: "red", fontWeight: "bold" }}
      separatorStyle={{ color: "#1CC625" }}
      timeToShow={["M", "S"]}
      timeLabels={{ m: null, s: null }}
      showSeparator
    />
  );
}


export default OneTimePin;

// class CountWrapper extends Component {
//   render() {
//     return (
//         <CountDown
//         size={20}
//         until={60 * 2 + 30}
//         onFinish={()=>alert('Your one time pin has expired!')}
//         digitStyle={{ backgroundColor: GlobalColors.whites.c1, borderWidth: 0 }}
//         digitTxtStyle={{ color: GlobalColors.primary.level3Green }}
//         timeLabelStyle={{ color: "red", fontWeight: "bold" }}
//         separatorStyle={{ color: "#1CC625" }}
//         timeToShow={["M", "S"]}
//         timeLabels={{ m: null, s: null }}
//         showSeparator
//       />
//     )
//   }
// }

