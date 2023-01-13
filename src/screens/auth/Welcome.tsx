import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import AuthCard from "../../components/AuthCard/AuthCard";
import { AuthStyles } from "../../styles/AuthStyles";

import WelcomeImg from '../../asset/wk.png';

import { Paragraph, Title } from "react-native-paper";
import GlobalButton from "../../components/Globals/GlobalButton";
import { useNavigation } from "@react-navigation/native";

const title1 = 'CHOOSE FROM OUR BEST';
const title2 = '\nFRUITS & VEGETABLES';
const sub = 'choose anything from daily essentials to fruits and vegetables by rev tracking';

const Welcome = () => {
  const navigation = useNavigation();

  const onTransitLogin=()=>{
    navigation.navigate('login');
  }

  return (
    <AuthWrapper>
      <View>
        <AuthCard>
          <SkipWrapper/>
          <ImageWrapper/>
        </AuthCard>
        <LinesWrapper/>
        <ContentWrapper/>
        <GlobalButton title="lets get started" onPress={onTransitLogin}/>
      </View>
    </AuthWrapper>
  );
};

function SkipWrapper() {
  return (
    <View style={AuthStyles.skipCon}>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={AuthStyles.skip}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

function ImageWrapper(){
  return(
    <Image source={WelcomeImg} style={AuthStyles.WelcomeImage}/>
  )
}

function LinesWrapper(){
  return(
    <View style={AuthStyles.lineWrapper}>
      <View style={AuthStyles.leftLine}/>
      <View style={AuthStyles.middleLine}/>
      <View style={AuthStyles.rightLine}/>
    </View>
  )
}

function ContentWrapper(){
  return(
    <View style={AuthStyles.contentWrapper}>
      <TitleWrapper/>
      <ParagraphWrapper/>
    </View>
  )
}

function TitleWrapper(){
  return <Title style={AuthStyles.title}>{title1}<Title style={[AuthStyles.title2]}>{title2}</Title></Title>
}

function ParagraphWrapper(){
  return <Paragraph style={AuthStyles.paragraph}>{sub}</Paragraph>
}

export default Welcome;
