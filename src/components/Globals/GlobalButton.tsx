import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infastructure/GlobalColors";
import { GlobalFonts } from "../../infastructure/GlobalFonts";

interface btn{
    onPress?():{},
    title:string,
}
const GlobalButton = (props:btn) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor:GlobalColors.primary.level4Green,
        marginHorizontal:15,
        alignSelf:'center',
        marginTop:25,
        padding:15,
        width:'85%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    title:{
        color:GlobalColors.white,
        textTransform:"uppercase",
        fontFamily:GlobalFonts.roboto.bold,
        fontSize: 20,
        letterSpacing:1.5
    }
});
