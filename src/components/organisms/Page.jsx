import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Accordion from '../molecules/Accordion'

export default function Page() {
  return (
    <View>
        <Accordion title={"Card1"}>
            <Text style={styles.tempTestStyle}>card1</Text>
            <Text style={styles.tempTestStyle}>card2</Text>
            <Text style={styles.tempTestStyle}>card3</Text>
            <Text style={styles.tempTestStyle}>card4</Text>
        </Accordion>

        <Accordion title={"Card2"}>
            <Text style={styles.tempTestStyle}>card1</Text>
            <Text style={styles.tempTestStyle}>card2</Text>
            <Text style={styles.tempTestStyle}>card3</Text>
            <Text style={styles.tempTestStyle}>card4</Text>
    </Accordion>
    </View>

  )
}

const styles = StyleSheet.create({
    tempTestStyle:{
        height: 50,
        textAlign: "center",
        textAlignVertical: "center",
    },
})