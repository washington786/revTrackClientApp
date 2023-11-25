import { StyleSheet } from "react-native";
import { GlobalColors } from "../infastructure/GlobalColors";
import { GlobalFonts } from "../infastructure/GlobalFonts";

export const CartStyles = StyleSheet.create({
  topWrapper: {
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: GlobalColors.white,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontFamily: GlobalFonts.roboto.bold,
  },
  contentWrapper: {
    paddingHorizontal: 15,
  },
  contentText: {
    fontFamily: GlobalFonts.inter.medium,
    color: GlobalColors.primary.level2GreenLight,
    fontSize: 14,
  },
  cartItemWrapper: {
    flexDirection: "row",
    marginTop: 30,
  },
  cartItemContentWrapper: {
    flex: 1,
    marginHorizontal: 5,
    paddingLeft: 15,
  },
  cartItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    resizeMode: "cover",
  },
  cartItemName: {
    fontFamily: GlobalFonts.inter.medium,
    padding: 0,
    marginTop: -3,
    color: GlobalColors.grey.l8,
  },
  functionalWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 6,
  },
  functionalWrappers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: GlobalColors.lowWhite,
    flex: 0.6,
    borderRadius: 10,
    padding: 4,
  },
  priceWrapper: {
    flex: 1,
    alignItems: "center",
  },
  minus: {
    backgroundColor: GlobalColors.white,
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: GlobalColors.primary.darkGreen,
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  qty: {
    marginHorizontal: 5,
  },
  priceTxt: {
    fontFamily: GlobalFonts.inter.bold,
    color: GlobalColors.primary.level4Green,
  },
  bottom: {
    position: "absolute",
    bottom: 10,
    backgroundColor: GlobalColors.card,
    height: 140,
    width: "95%",
    alignSelf: "center",
    paddingHorizontal: 8,
  },
  totalWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
  },
  subWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 3,
  },
  button: {
    padding:2,
    borderRadius:50,
    textAlign:'center',
    fontSize:18,
    textTransform:"uppercase"
  },
  label: {
    textAlign:'center',
    fontSize:18,
    textTransform:"uppercase"
  },
  totalText:{
    fontSize: 16,
  },
  empty:{
    flex:1,
    backgroundColor:GlobalColors.white,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:20
  },
  lottie:{
    width:320,
    height:'100%'
  },
  textEmpty:{
    fontFamily:GlobalFonts.inter.ELight,
    paddingVertical:8
  },
  emptyBtn:{
    width:'100%',
    marginTop:10
  },

  recommendedWrapper:{
    marginHorizontal:6,
    marginTop:44,
    flex:1
  },
  recommendedImg:{
    width: '100%',
    height:120,
    resizeMode:"cover",
    borderRadius:5
  },
  recText:{
    fontFamily: GlobalFonts.inter.regular,
    paddingVertical:8
  },
  recName:{
    fontFamily:GlobalFonts.inter.regular
  },
  recLoc:{
    flexDirection:'row',
    alignItems:'center'
  },
  recWrapper:{
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:-3
  },
  locationWrapper:{
    width:'100%'
  },
  closed:{
    width:30,
    height:25,
    alignSelf:'flex-end',
    resizeMode:"contain"
  },
  container:{
    flex:1
  },
  locationText:{
    paddingHorizontal:5,
    fontFamily: GlobalFonts.inter.thin
  },
  recScroll:{
    flexGrow:1,
    paddingBottom:8
  },
  bottomSheet:{
    width:'100%',
    height:'100%'
  }
});
