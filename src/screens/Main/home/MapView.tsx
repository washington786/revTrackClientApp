import { View, Platform,Image} from "react-native";
import React, { useEffect, useState } from "react";
import { HomeStyles } from "../../../styles/HomeStyles";

import MapView, { Callout, Marker } from "react-native-maps";

import * as Location from "expo-location";
import { UseStoreContext } from "../../../useContexts/StoresContext";
import { useNavigation } from "@react-navigation/core";

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import WebView from "react-native-webview";
import { Paragraph } from "react-native-paper";
import { GlobalColors } from "../../../infastructure/GlobalColors";

const MapViews = () => {
  return (
    <View style={HomeStyles.mapCon}>
      <MapWrapper />
    </View>
  );
};

export default MapViews;

function MapWrapper() {
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const [longitude, setLongitude] = useState("");

  const [latitude, setLatitude] = useState("");

  const { store } = UseStoreContext();
  
  const onStoreDetails=(id)=>{
    navigation.navigate('storeDetails',{id:id})
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      var { latitude, longitude } = coords;
      setLatitude(latitude.toString());
      setLongitude(longitude.toString());
    })();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      region={{
        latitude: +latitude,
        longitude: +longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.029,
      }}
    >
      {store.map((item) => {

        const {coordinates,id,name} = item;

        const {latitude,longitude} = coordinates;

        return (
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            key={name}
            title={name}
          >
            <Marker coordinate={coordinates}>
                <CustomMarkerWrapper/>
            </Marker>
            <Callout
              onPress={
                onStoreDetails.bind(this,id)
              }
              
            >
              <MapMarkerCard store={item} />
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
}



function MapMarkerCard ({ store }){

    const isAndroid = Platform.OS === "android";

    const {image_url,name} = store;
  
    return (
        <View style={HomeStyles.container}>
          {
              isAndroid? <WebView source={{ uri: image_url }} style={HomeStyles.img} />:<Image source={{ uri: image_url }} style={HomeStyles.img} />
          }
          
          <Paragraph style={HomeStyles.text}>{name}</Paragraph>
        </View>
    );
  };

  function CustomMarkerWrapper(){
    return <View style={HomeStyles.markerWrapper}>
        <Icons name="storefront-outline" size={25} color={GlobalColors.white}/>
    </View>
  }