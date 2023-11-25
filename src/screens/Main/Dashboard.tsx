import { View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import ScrollViewComponent from "../../components/Main/ScrollViewComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Caption, Divider, Paragraph, Title } from "react-native-paper";
import { MainStyles } from "../../styles/MainStyles";
import { Image as ElementsImage } from "react-native-elements";

import Icons from "react-native-vector-icons/Feather";
import { GlobalColors } from "../../infastructure/GlobalColors";

import ClosedRed from "../../asset/closed_red.png";

import { StoreData } from "../../DummyData/DummyData";

import { useNavigation } from "@react-navigation/native";

var data = [
  {
    id: 1,
    title: "Bananas",
    selected: false,
  },
  {
    id: 2,
    title: "Apples",
    selected: false,
  },
  {
    id: 3,
    title: "Carrots",
    selected: false,
  },
  {
    id: 4,
    title: "Tomatoes",
    selected: false,
  },
  {
    id: 5,
    title: "Grapes",
    selected: false,
  },
  {
    id: 7,
    title: "Eggs",
    selected: false,
  },
  {
    id: 6,
    title: "Cabbage",
    selected: false,
  },
  {
    id: 8,
    title: "Chickens",
    selected: false,
  },
];

const Dashboard = () => {
  return (
    <ScrollViewComponent>
      <View>
        <CategoryWrapper />
        <StoreWrapper />
      </View>
    </ScrollViewComponent>
  );
};

export default Dashboard;


function CategoryWrapper() {
  let [selectedItem, setIsSelected] = useState(false);

  const onSelectedCategory = () => {
    // let found = data.find((item) => {
    //   return item.id === items.id;
    // });
    // return found;
    setIsSelected(!selectedItem);

  };

  return (
    <>
      <Title style={MainStyles.catText}>Categories</Title>
      <ScrollView
        horizontal={true}
        contentContainerStyle={MainStyles.scrollContentCategories}
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          const { title, id, selected } = item;

          return (
            <Category
              title={title}
              key={index.toString()}
              onSelected={onSelectedCategory}
              selected={selectedItem}
              id={id}
            />
          );
        })}
      </ScrollView>
    </>
  );
}
// interface for categories
interface cat {
  title: string;
  selected?: boolean;
  onSelected?: () => void;
  id: number;
}
function Category(props: cat) {
  return (
    <TouchableOpacity
      style={
        props.selected
          ? MainStyles.selectedCategory
          : MainStyles.unSelectedCategory
      }
      activeOpacity={0.5}
      onPress={props.onSelected}
    >
      {/* <View> */}
        <Caption
          style={props.selected && MainStyles.selectedCategoryText}
          key={props.id}
        >
          {props.title}
        </Caption>
      {/* </View> */}
    </TouchableOpacity>
  );
}

// store component
function StoreWrapper() {
  const navigation = useNavigation();

  const onStoreDetails=(id)=>{
    navigation.navigate('storeDetails',{id:id});
  }

  const onAllStores=()=>{
    navigation.navigate('allStores');
  }

  return (
    <View style={MainStyles.storeWrapper}>
      {/* top layers */}
      <View>
        <View style={MainStyles.inStoreWrapper}>
          <Title>All Nearest Stores</Title>
          <TouchableOpacity activeOpacity={0.5} onPress={onAllStores}>
            <Caption style={MainStyles.viewAll}>view all</Caption>
          </TouchableOpacity>
        </View>
        <Caption style={MainStyles.numberOfStores}>20 stores near you.</Caption>
      </View>

      {/* store component */}
      {StoreData.map((store) => {
        const { id, name, image_url, location, is_closed } = store;
        const { display_address } = location;
        return (
          <Store
            image_uri={image_url}
            isClosed={is_closed}
            key={id}
            location={display_address.toString()}
            name={name}
            onPress={onStoreDetails.bind(this,id)}
          />
        );
      })}
    </View>
  );
}

interface Store {
  isClosed?: boolean;
  name?: string;
  location?: string;
  image_uri?: string;
  onPress?:()=>void
}

export function Store(props: Store) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={MainStyles.card}>
        <ElementsImage
          source={{ uri: props.image_uri }}
          resizeMode="cover"
          resizeMethod="auto"
          height={200}
          width={"100%"}
          style={MainStyles.cardImage}
        />
        <Title
          style={MainStyles.storeName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {props.name}
        </Title>

        <View style={MainStyles.closedWrapper}>
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
              style={MainStyles.closedImage}
            />
          )}
        </View>

        <Divider style={MainStyles.divider} />
      </View>
    </TouchableOpacity>
  );
}
