import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/atoms/Button";
import Navigation from "./src/components/molecules/Navigation";
import Header from "./src/components/Header";
import Page from "./src/components/organisms/Page";

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Header
        header1={"IAF (EME) E-03 (Version 2.0 Aug 2022)"}
        header2={"TECHNICAL INSPECTION REPORT ('B' VEHICLES) :TATA 2.5 TON 713C & 715 TC"}
        header3={'Nature of Inspection (Sec SAO 01/S/98) : ANNUAL TECH INSPECTION{" "}'}
      />

      <Navigation
        navList={[
          "DETAILS",
          "OIL LEVEL INSPECTION",
          "DIAGNOSTIC INSPECTION",
          "VISUAL INSPECTION",
        ]}
      />

      <Page />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
