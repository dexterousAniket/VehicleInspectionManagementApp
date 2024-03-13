import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Button from "../atoms/Button";

// PROPS
//  - navList
export default function Navigation(props) {
  const [activeButtonIndex, setactiveButtonIndex] = useState(0);

  const navClickHandler = (index) => {
    setactiveButtonIndex(index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={true}>
      {props.navList.map((nav, index) => (
        <View>
          {activeButtonIndex == index ? (
            <Button
              text={nav}
              key={index}
              index={index}
              clickHandler={navClickHandler}
              height={50}
              bgcolor={"white"}
              color={"black"}
              rippleColor={"white"}
            />
          ) : (
            <Button
              text={nav}
              key={index}
              index={index}
              clickHandler={navClickHandler}
              height={50}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
