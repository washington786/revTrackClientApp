import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infastructure/GlobalColors";

const ScrollViewComponent = ({ children }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.white,
  },
  content: {
    flexGrow: 1,
  },
});
