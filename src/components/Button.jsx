import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default Button = (props) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor: "blue"
  },
});
