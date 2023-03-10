import { Platform, StyleSheet } from 'react-native'
import { GlobalColors } from '../infastructure/GlobalColors'
import { GlobalFonts } from '../infastructure/GlobalFonts'


export const MainStyles = StyleSheet.create({
    searchWrapper:{
        paddingHorizontal:8,
        marginVertical:8
    },
    topWrapper:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-around'
    },
    touch:{
        marginHorizontal:20,
        padding:8,
        marginVertical:15,
        maxWidth:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    selected:{
        backgroundColor:GlobalColors.primary.lightGreen,
    },
    notSelected:{
        borderWidth:0.8,
        borderColor: GlobalColors.primary.lightGreen
    },
    unSelectedText:{
        color: GlobalColors.primary.darkGreen
    },
    selectedCategory:{
        marginHorizontal:5,
        flexDirection:'row',
        backgroundColor:GlobalColors.black,
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
        elevation:5,
    },
    unSelectedCategory:{
        backgroundColor:GlobalColors.white,
        marginHorizontal:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
        borderWidth:0.8,
        borderColor:GlobalColors.black,
        elevation: Platform.OS==='android'? 1:0
    },
    scrollContentCategories:{
        flexGrow:1
    },
    selectedCategoryText:{
        color:GlobalColors.white
    },
    catText:{
        paddingVertical:8,
        paddingHorizontal:5
    },
    storeWrapper:{
        marginHorizontal:5,
        marginVertical:15,
        paddingHorizontal:8
    },
    inStoreWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewAll:{
        color:GlobalColors.primary.level3Green,
        fontFamily:GlobalFonts.inter.semibold
    },
    numberOfStores:{
        fontFamily:GlobalFonts.inter.ELight,
        color:GlobalColors.grey.l5,
        marginTop:-5
    },
    cardImage:{
        resizeMode:"cover",
        maxHeight:200,
        minHeight:200,
        height:'100%'
    },
    card:{
        borderWidth:0,
        borderColor:GlobalColors.grey.l1,
        padding:2,
        marginVertical:8
    },
    storeName:{
        color:GlobalColors.primary.level2GreenLight,
        fontFamily:GlobalFonts.roboto.regular
    },
    location:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    locationText:{
        color:GlobalColors.grey.l5,
        fontFamily: GlobalFonts.roboto.light,
        paddingHorizontal:8
    },
    divider:{
        marginTop:5
    },
    closedWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
    },
    closedImage:{
        resizeMode:"contain",
        flex:0.5,
        height:20,
        width:'100%'
    },
    // all stores
    allStoresWrapper:{
        marginHorizontal:8
    },
    allStoresTopView:{
        flexDirection:'row',
        alignItems:'center'
    },
    allStoresTopTitle:{
        fontFamily:GlobalFonts.roboto.bold,
        color: GlobalColors.grey.l6,
        textAlign:'center',
        flex:1
    }
})