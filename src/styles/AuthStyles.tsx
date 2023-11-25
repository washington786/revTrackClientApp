import { StyleSheet } from "react-native";
import { GlobalColors } from "../infastructure/GlobalColors";
import { GlobalFonts } from "../infastructure/GlobalFonts";

export const AuthStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: GlobalColors.white,
  },
  card: {
    backgroundColor: GlobalColors.primary.level4Green,
    minHeight: 400,
    maxHeight: 400,
    borderBottomRightRadius: 160,
  },
  skipCon: {
    alignSelf: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  skip: {
    color: GlobalColors.white,
    fontFamily: GlobalFonts.roboto.regular,
  },
  WelcomeImage: {
    height: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: -15,
  },
  lineWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  leftLine: {
    maxWidth: 40,
    minHeight: 10,
    backgroundColor: GlobalColors.grey.l4,
    maxHeight: 10,
    padding: 5,
    borderRadius: 4,
  },
  middleLine: {
    maxWidth: 90,
    minWidth: 90,
    minHeight: 10,
    backgroundColor: GlobalColors.primary.darkGreen,
    maxHeight: 10,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  rightLine: {
    maxWidth: 40,
    minHeight: 10,
    backgroundColor: GlobalColors.grey.l4,
    maxHeight: 10,
    padding: 5,
    borderRadius: 4,
  },
  contentWrapper: {
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    fontFamily: GlobalFonts.roboto.bold,
    fontSize: 25,
    color: GlobalColors.grey.l5,
    letterSpacing: 1,
  },
  title2: {
    color: GlobalColors.primary.level4Green,
    textAlign: "center",
    fontFamily: GlobalFonts.roboto.bold,
    fontSize: 25,
    letterSpacing: 1,
  },
  paragraph: {
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 20,
    fontFamily: GlobalFonts.inter.light,
    fontSize: 14,
    color: GlobalColors.grey.l4,
  },
  textInputOutLine: {
    marginHorizontal: 2,
    marginVertical: 8,
  },
  resetText: {
    marginVertical: 8,
    fontFamily: GlobalFonts.roboto.medium,
    color: GlobalColors.grey.l6,
    alignSelf: "flex-end",
    textTransform: "uppercase",
    fontSize: 14,
  },
  loginWrapper: {
    paddingHorizontal: 10,
  },
  btnLogin: {
    borderRadius: 0,
    padding: 5,
    marginVertical: 8,
  },
  btnLabel: {
    fontSize: 18,
    fontFamily: GlobalFonts.roboto.bold,
    letterSpacing: 2,
  },
  loginsContentWrapper: {
    marginTop: 30,
    marginBottom: 40,
  },
  contentTitle: {
    fontFamily: GlobalFonts.roboto.bold,
    fontSize: 24,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  contentParagraph: {
    fontFamily: GlobalFonts.roboto.thin,
    fontSize: 16,
    letterSpacing: 0.6,
    textTransform: "lowercase",
    color: GlobalColors.grey.l8,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: GlobalColors.primary.darkGreen,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: GlobalColors.primary.darkGreen,
  },
});
