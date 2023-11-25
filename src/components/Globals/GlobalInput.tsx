import React, { Component } from "react";
import { TextInput } from "react-native-paper";
import { AuthStyles } from "../../styles/AuthStyles";

interface input {
  placeHolder?: string;
  textInputConfig?: object;
  keyboardType?:string,
  icon:string,
  password?:boolean,
}

const GlobalInput = (props: input) => {
  return (
    <TextInput
      mode="outlined"
      placeholder={`${props.placeHolder}`}
      style={AuthStyles.textInputOutLine}
      keyboardType={props.keyboardType}
      {...props.textInputConfig}
      left={<TextInput.Icon icon={props.icon}/>}
      autoCapitalize={"none"}
    />
  );
};

export default GlobalInput;
