import { View, TouchableOpacity, Image } from "react-native";
import React, { Fragment, useState } from "react";
import { StoreData } from "../../../DummyData/DummyData";
import { MainStyles } from "../../../styles/MainStyles";

import { AirbnbRating, Image as ElementsImage } from "react-native-elements";

import Icons from "react-native-vector-icons/Feather";

import ClosedRed from "../../../asset/closed_red.png";

import {
  Caption,
  Divider,
  Paragraph,
  Searchbar,
  Title,
} from "react-native-paper";

import { GlobalColors } from "../../../infastructure/GlobalColors";
import { useNavigation } from "@react-navigation/native";
import { HomeStyles } from "../../../styles/HomeStyles";
import ScrollViewComponent from "../../../components/Main/ScrollViewComponent";

const StoreDetails = ({ route }) => {
  const navigation = useNavigation();

  const { id } = route.params;
  const storeFound = StoreData.find((store) => {
    return store.id === id;
  });

  const onGoBack = () => {
    navigation.goBack();
  };

  const {
    image_url,
    location,
    is_closed,
    name,
    rating,
    review_count,
    products,
  } = storeFound;

  const { display_address } = location;

  const [searchProduct, setSearchProduct] = useState("");
  const onChangeSearchProduct = (e) => {
    setSearchProduct(e);
  };

  return (
    <Fragment>
      <View style={HomeStyles.storeCon}>
        <Store
          image_uri={image_url}
          isClosed={is_closed}
          location={display_address}
          name={name}
          onPress={onGoBack}
          rating={rating}
          reviews_count={review_count}
        />
      </View>
      <ScrollViewComponent>
        <View style={HomeStyles.searchWrapper}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearchProduct}
            value={searchProduct}
            elevation={0}
          />
        </View>
        <ProductWrapper productsData={products} />
      </ScrollViewComponent>
    </Fragment>
  );
};

export default StoreDetails;

interface Store {
  isClosed?: boolean;
  name?: string;
  location?: string;
  image_uri?: string;
  onPress?: () => void;
  rating?: number;
  reviews_count?: number;
}

export function Store(props: Store) {
  return (
    <View style={[MainStyles.card, HomeStyles.cardDetails]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={props.onPress}
        style={HomeStyles.storeGoBackBtn}
      >
        <View style={HomeStyles.icon}>
          <Icons name="arrow-left" size={30} style={HomeStyles.icon} />
        </View>
      </TouchableOpacity>
      <ElementsImage
        source={{ uri: props.image_uri }}
        resizeMode="cover"
        resizeMethod="auto"
        height={200}
        width={"100%"}
        style={[MainStyles.cardImage, { padding: 0, margin: 0 }]}
      />
      <Title
        style={[MainStyles.storeName, HomeStyles.storeTitle]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {props.name}
      </Title>

      <View>
        <View style={[MainStyles.closedWrapper, HomeStyles.storeLocation]}>
          <View style={MainStyles.location}>
            <Icons name="map-pin" color={GlobalColors.grey.l5} size={14} />
            <Paragraph
              style={MainStyles.locationText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {props.location}
            </Paragraph>
          </View>
          {props.isClosed && (
            <Image
              source={ClosedRed}
              resizeMode="contain"
              style={[MainStyles.closedImage, HomeStyles.closedImg]}
            />
          )}
        </View>
        <View style={HomeStyles.ratingContainer}>
          <AirbnbRating
            count={5}
            isDisabled={true}
            defaultRating={props.rating}
            size={15}
            starContainerStyle={HomeStyles.starCon}
          />
          <Caption> • {props.reviews_count} reviews</Caption>
        </View>
      </View>
    </View>
  );
}

function ProductWrapper({ productsData }) {
  const navigation = useNavigation();

  const onAddToCart = (id) => {
    console.log(id);
  };

  const onToProductDetails=(product)=>{
    navigation.navigate("productDetails", { product:product });
  }

  return (
    <>
      <Title style={HomeStyles.storeTitle}>Products</Title>

      {productsData.map((product) => {
        const { name, description, price, url, id } = product;

        let uriImage = url.slice(0)[0];

        return (
          <Product
            description={description}
            name={name}
            price={price}
            onPress={onAddToCart.bind(this, id)}
            uri={uriImage}
            id={id}
            key={id}
            onPressToDetails={onToProductDetails.bind(this,product)}
          />
        );
      })}
    </>
  );
}

interface product {
  name?: string;
  description?: string;
  price?: number;
  id?: number;
  uri?: string;
  onPress?: () => void;
  onPressToDetails?:()=>void;
}

function Product(props: product) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPressToDetails}>
      <View style={HomeStyles.productWrapper}>
        <View style={HomeStyles.prodCon}>
          <Image
            source={{ uri: props.uri }}
            resizeMode="contain"
            style={HomeStyles.productImage}
          />
          <View style={HomeStyles.contentProduct}>
            <Title
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={HomeStyles.productName}
            >
              {props.name}
            </Title>
            <Paragraph
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={HomeStyles.productDesc}
            >
              {props.description}
            </Paragraph>
            <Caption style={HomeStyles.productPrice}>
              R{props.price?.toFixed(2)}
            </Caption>
          </View>
        </View>
        <TouchableOpacity
          style={HomeStyles.productCartWrapper}
          onPress={props.onPress}
          activeOpacity={0.3}
        >
          <Icons name="shopping-cart" size={20} />
        </TouchableOpacity>
        <Divider style={HomeStyles.divider} />
      </View>
    </TouchableOpacity>
  );
}
