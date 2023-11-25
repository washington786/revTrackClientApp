import { View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { Searchbar } from "react-native-paper";
import { MainStyles } from "../../styles/MainStyles";

const Search = () => {
  const [search,setSearch] = useState('');
  const onSearchChange=(e)=>{
    setSearch(e);
  }
  return (
    <MainWrapper>
        <View style={MainStyles.searchWrapper}>
          <Searchbar
            placeholder="Search stores, products"
            onChangeText={onSearchChange}
            value={search}
          />
        </View>
    </MainWrapper>
  );
};

export default Search;
