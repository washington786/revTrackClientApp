import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ScrollViewComponent from '../../../components/Main/ScrollViewComponent'
import { UseStoreContext } from '../../../useContexts/StoresContext'
import { Store } from '../Dashboard'
import { useNavigation } from '@react-navigation/native'
import { MainStyles } from '../../../styles/MainStyles'
import { Title } from 'react-native-paper';

import Icons from 'react-native-vector-icons/Feather';

const ViewAllStores = () => {
  const {store} = UseStoreContext();
  return (
    <ScrollViewComponent>
      <View style={MainStyles.allStoresWrapper}>
        <TopWrapper/>
        <StoresWrapper stores={store}/>
      </View>
    </ScrollViewComponent>
  )
}

export default ViewAllStores

function StoresWrapper({stores}){

  const navigation = useNavigation();

  const onStoreDetails=(id)=>{
    navigation.navigate('storeDetails',{id:id});
  }

  return(<>
  {stores.map((store) => {
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
  </>)
}

function TopWrapper(){
  const navigation = useNavigation();

  return (
    <View style={MainStyles.allStoresTopView}>
      <View>
        <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={0.5}>
          <Icons name='arrow-left' size={22}/>
        </TouchableOpacity>
      </View>
      <Title style={MainStyles.allStoresTopTitle}>All Available Stores</Title>
    </View>
  )
}