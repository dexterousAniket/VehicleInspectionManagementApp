import { StyleSheet, Text, View } from "react-native";
import React from "react";

//  PROPS
//  - header1
//  - header2
//  - header3
//  - bgColor
export default function Header(props) {
  const bgColor = props.bgColor ? props.bgColor : "#283618";

  return (
    <View style={{ ...styles.container, backgroundColor: bgColor }}>
      <Text style={styles.header1}>{props.header1}</Text>
      <Text style={styles.header2}>{props.header2}</Text>
      <Text style={styles.header3}>{props.header3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    paddingTop: 50,
  },

  header1: {
    flexGrow: 1,
    width: "100%",
    textAlign: "right",
    textAlignVertical: "bottom",
    fontSize: 11,
    color: "white",
  },

  header2: {
    width: "100%",
    height: 65,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    fontWeight: "500",
  },

  header3: {
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
    fontSize: 12,
    color: "white",
  },
});
