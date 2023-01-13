import { StyleSheet } from "react-native";
import { GlobalColors } from "../infastructure/GlobalColors";
import { GlobalFonts } from "../infastructure/GlobalFonts";

export const HomeStyles = StyleSheet.create({
  storeGoBackBtn: {
    position: "absolute",
    top: 5,
    left: 8,
    zIndex: 100,
  },
  cardDetails: {
    position: "relative",
    padding: 0,
    margin: 0,
  },
  icon: {
    backgroundColor: GlobalColors.primary.lightGreen,
    borderRadius: 100,
  },
  storeCon: {
    backgroundColor: GlobalColors.white,
    marginTop: -5,
  },
  storeTitle: {
    paddingLeft: 8,
  },
  storeLocation: {
    paddingLeft: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 8,
  },
  starCon: {
    padding: 0,
    margin: 0,
    marginTop: -27,
    alignItems: "center",
    justifyContent: "center",
  },
  closedImg: {
    marginRight: 10,
  },
  searchWrapper: {
    borderWidth: 0.5,
    borderColor: GlobalColors.grey.l3,
    marginHorizontal: 8,
    borderRadius: 50,
    marginVertical: 10,
  },
  productImage: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productWrapper: {
    marginHorizontal: 5,
    marginVertical: 8,
    position: "relative",
  },
  prodCon: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: 5,
    width: "100%",
  },
  contentProduct: {
    paddingHorizontal: 8,
    flex: 1,
  },
  productName: {
    fontFamily: GlobalFonts.roboto.black,
    fontSize: 16,
    color: GlobalColors.black,
  },
  productDesc: {
    fontFamily: GlobalFonts.roboto.iLight,
    color: GlobalColors.grey.l4,
    padding: 0,
    fontSize: 10,
    marginTop: -5,
  },
  productPrice: {
    fontFamily: GlobalFonts.roboto.bold,
    color: GlobalColors.primary.darkGreen,
  },
  productCartWrapper: {
    position: "absolute",
    bottom: 3,
    right: 8,
    backgroundColor: GlobalColors.primary.lightGreen,
    padding: 8,
  },
  divider: {
    marginTop: 8,
    marginHorizontal: 5,
  },

  // product details
  productContentContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  contentContainer:{
    paddingHorizontal: 8, marginVertical: 8
  },
  cartButton:{
    padding:5,
    marginTop:40,
    borderRadius:50
  },
  nameD:{
    fontFamily:GlobalFonts.roboto.bold,
    fontSize:23
  },
  descD:{
    fontFamily:GlobalFonts.roboto.thin,
    textAlign:'justify'
  },
  priceD:{
    fontFamily:GlobalFonts.roboto.black,
    color:GlobalColors.primary.darkGreen,
    fontSize:18,
    paddingVertical:5
  },

//   map
  mapCon:{
    flex:1,
    backgroundColor: GlobalColors.white
  },
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  img: {
    height: 120,
    width: 150,
    resizeMode:"cover"
  },
  text: {
    textAlign: "center",
  },

  markerWrapper:{
    width:40,
    height:40,
    backgroundColor:GlobalColors.primary.level2Green,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }

});
