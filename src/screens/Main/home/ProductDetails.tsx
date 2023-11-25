import { View, Image, TouchableOpacity } from "react-native";
import React, { Fragment } from "react";

import Swiper from "react-native-swiper";
import { GlobalColors } from "../../../infastructure/GlobalColors";
import ScrollViewComponent from "../../../components/Main/ScrollViewComponent";

import Icons from "react-native-vector-icons/Feather";
import { Button, Caption, DataTable, Paragraph, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { GlobalFonts } from "../../../infastructure/GlobalFonts";
import { HomeStyles } from "../../../styles/HomeStyles";

const ProductDetails = ({ route }) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  const { product } = route.params;

  console.log(product);

  const { url,category,description,id,price,status,name, } = product;
  

  return (
    <View style={HomeStyles.productContentContainer}>
      <BackWrapper onPress={onGoBack} productName={name}/>
      <SwiperWrapper url={url} />
      <ScrollViewComponent>
        <View style={HomeStyles.contentContainer}>
          <ContentWrapper category={category} description={description} name={name} status={status==='in-stock'?'available':'unavailable'} price={price}/>
          <ButtonWrapper onPress={()=>{}}/>
        </View>
      </ScrollViewComponent>
    </View>
  );
};

export default ProductDetails;

function SwiperWrapper({ url }) {
  return (
    <Swiper
      showsButtons={false}
      height={300}
      containerStyle={{ height: 300, maxHeight: 300 }}
      contentContainerStyle={{ height: 300, maxHeight: 300 }}
      activeDotColor={GlobalColors.white}
    >
      {url.map((item, index) => (
        <View style={{ height: 300, backgroundColor: "red" }} key={index}>
          <Image
            style={{ resizeMode: "cover", height: 300, width: "100%" }}
            source={{ uri: item }}
            resizeMode="cover"
          />
        </View>
      ))}
    </Swiper>
  );
}

interface bar {
  onPress?: () => void;
  productName?: string
}

export function BackWrapper(props: bar) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity style={{ padding: 8,backgroundColor:GlobalColors.card,marginLeft:5 }} onPress={props.onPress}>
        <Icons
          name="arrow-left"
          size={20}
          color={GlobalColors.primary.level4Green}
        />
      </TouchableOpacity>
      <Title
        style={{ flex: 1,textAlign:"center",fontFamily:GlobalFonts.roboto.black }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {props.productName}
      </Title>
    </View>
  );
}

interface prod{
  name?:string;
  description?:string;
  price?: number;
  category?: string;
  status?: string;
}

function ContentWrapper(props:prod){
  return(
    <View>
      <Title style={HomeStyles.nameD}>{props.name}</Title>
      <Caption style={HomeStyles.priceD}>R{props.price?.toFixed(2)}</Caption>
      <Paragraph style={HomeStyles.descD}>{props.description}</Paragraph>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Category</DataTable.Title>
        <DataTable.Title>In-stock</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>{props.category}</DataTable.Cell>
        <DataTable.Cell>{props.status}</DataTable.Cell>
      </DataTable.Row>
      </DataTable>
    </View>
  )
}

interface btn{
  onPress?:()=>void;
}

function ButtonWrapper(props: btn){
  return(
    <Button mode="contained" icon={'cart'} buttonColor={GlobalColors.primary.darkGreen} onPress={props.onPress} style={HomeStyles.cartButton}>add to cart</Button>
  )
}