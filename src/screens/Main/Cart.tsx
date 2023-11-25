import {
  View,
  Image as Images,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { Fragment, useRef } from "react";
import ScrollViewComponent from "../../components/Main/ScrollViewComponent";
import { Button, Caption, Divider, Paragraph, Text, Title } from "react-native-paper";
import { CartStyles } from "../../styles/CartStyles";

import Icons from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Feather";
import { GlobalColors } from "../../infastructure/GlobalColors";

import LottieView from "lottie-react-native";

import ClosedRed from "../../asset/closed_red.png";
import { useNavigation } from "@react-navigation/native";
import { UseStoreContext } from "../../useContexts/StoresContext";

import BottomSheet from "react-native-raw-bottom-sheet";

const Cart = () => {
  let cart = [];

  const bottomSheetRef = useRef();

  const openBottomSheet=()=>{
    bottomSheetRef.current.open();
  }

  return (
    <Fragment>
      <TopWrapper />
      <ScrollViewComponent>
        {cart.length === 0 && (
          <View>
            <EmptyWrapper />
            <RecommendedWrapper />
          </View>
        )}
        {cart.length !== 0 && (
          <View>
            <ContentWrapper />
          </View>
        )}
      </ScrollViewComponent>
      {cart.length !== 0 && <Bottom openBottomSheet={openBottomSheet}/>}
      <BottomSheetWraper bottomSheetRef={bottomSheetRef}/>
    </Fragment>
  );
};

export default Cart;

function TopWrapper() {
  return (
    <View style={CartStyles.topWrapper}>
      <Title style={CartStyles.topText}>My Cart</Title>
    </View>
  );
}

function ContentWrapper() {
  return (
    <View style={CartStyles.contentWrapper}>
      <Title style={[CartStyles.topText, CartStyles.contentText]}>
        You have 2 item(s)
      </Title>
      <CartItem />
      <View style={{ height: 200 }} />
    </View>
  );
}

interface cart {
  name?: string;
  price?: number;
  quantity?: number;
}

function CartItem(props: cart) {
  let uri =
    "https://images.unsplash.com/photo-1670843632643-64d6558295da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <View style={CartStyles.cartItemWrapper}>
        <Images source={{ uri: uri }} style={CartStyles.cartItemImage} />
        <View style={CartStyles.cartItemContentWrapper}>
          <Title
            numberOfLines={1}
            ellipsizeMode="middle"
            style={CartStyles.cartItemName}
          >
            Squid Sweet & Sour Salad
          </Title>

          <View style={CartStyles.functionalWrapper}>
            {/* functional */}
            <View style={CartStyles.functionalWrappers}>
              <FunctionalWrapper iconName="minus" style={CartStyles.minus} />
              <TextWrapper text="1" style={CartStyles.qty} />
              <FunctionalWrapper
                iconName="plus"
                style={CartStyles.add}
                color={GlobalColors.white}
              />
            </View>
            {/* price */}
            <View style={CartStyles.priceWrapper}>
              <TextWrapper text="R299" style={CartStyles.priceTxt} />
            </View>
          </View>
        </View>
      </View>
      <Divider style={{ marginTop: 5, marginHorizontal: 6 }} bold={false} />
    </>
  );
}

interface Functional {
  onPress?: () => void;
  iconName: string;
  color?: string;
  style?: object;
}
function FunctionalWrapper(props: Functional) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={props.style}
    >
      <Icons name={props.iconName} size={20} color={props.color} />
    </TouchableOpacity>
  );
}

interface Txt {
  text?: string;
  style?: object;
}

function TextWrapper(props: Txt) {
  return <Title style={props.style}>{props.text}</Title>;
}

function Bottom({openBottomSheet}) {
  return (
    <View style={CartStyles.bottom}>
      <View style={CartStyles.subWrapper}>
        <Caption>Delivery fee</Caption>
        <Caption>R12.00</Caption>
      </View>
      <View style={CartStyles.totalWrapper}>
        <Caption>Sub-Total Amount</Caption>
        <Caption>R120.00</Caption>
      </View>
      <Divider />
      <View style={CartStyles.subWrapper}>
        <Caption>Total Amount</Caption>
        <Title style={CartStyles.totalText}>R132.00</Title>
      </View>
      <Button
        mode="contained"
        buttonColor={GlobalColors.primary.darkGreen}
        style={CartStyles.button}
        labelStyle={CartStyles.label}
        onPress={openBottomSheet}
      >
        check out
      </Button>
    </View>
  );
}

function EmptyWrapper() {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("home");
  };

  return (
    <View style={CartStyles.empty}>
      <LottieView
        autoPlay
        style={CartStyles.lottie}
        source={require("../../asset/empty.json")}
      />
      <Paragraph style={CartStyles.textEmpty}>
        your shopping cart is empty!
      </Paragraph>
      <Button
        mode="contained"
        buttonColor={GlobalColors.primary.darkGreen}
        style={[CartStyles.button, CartStyles.emptyBtn]}
        labelStyle={CartStyles.label}
        onPress={goHome}
      >
        continue shopping
      </Button>
    </View>
  );
}

function RecommendedWrapper() {
  const navigation = useNavigation();
  const { store } = UseStoreContext();

  const onStoreDetails = (id) => {
    navigation.navigate("storeDetails", { id: id });
  };

  return (
    <View style={CartStyles.recommendedWrapper}>
      <Caption style={CartStyles.recText}>Recommended Stores</Caption>
      <ScrollView
        horizontal={true}
        contentContainerStyle={CartStyles.recScroll}
        showsHorizontalScrollIndicator={false}
      >
        {store.map((item) => {
          const { id, name, image_url, location, is_closed } = item;
          const { display_address } = location;
          return (
            <RecommendedItem
              image_uri={image_url}
              isClosed={is_closed}
              key={id}
              location={display_address.toString()}
              name={name}
              onPress={onStoreDetails.bind(this, id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

interface rec {
  isClosed?: boolean;
  name?: string;
  location?: string;
  image_uri?: string;
  onPress?: () => void;
}
function RecommendedItem(props: rec) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ marginLeft: 10, maxWidth: 200, marginRight: 8 }}
    >
      <View style={CartStyles.container}>
        <Images
          source={{ uri: props.image_uri }}
          style={CartStyles.recommendedImg}
          resizeMethod="auto"
        />
        <View>
          <Title
            style={CartStyles.recName}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.name}
          </Title>
          <View style={[CartStyles.recLoc, CartStyles.recWrapper]}>
            <View style={[CartStyles.recLoc]}>
              <Icon name="map-pin" color={GlobalColors.grey.l5} size={14} />
              <Paragraph
                style={CartStyles.locationText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {props.location?.substring(0, 15)}...
              </Paragraph>
            </View>
            {props.isClosed && (
              <Images
                source={ClosedRed}
                resizeMode="contain"
                style={CartStyles.closed}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function BottomSheetWraper({bottomSheetRef}) {
  return (
    <BottomSheet closeOnDragDown={true} openDuration={150} height={300} ref={bottomSheetRef}>
      <View style={CartStyles.bottomSheet}><Text>Hey Sheet</Text></View>
    </BottomSheet>
  );
}
