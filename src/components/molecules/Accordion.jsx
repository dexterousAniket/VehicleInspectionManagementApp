import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../atoms/Card';

// PROPS
//  - title
//  - children
export default function Accordion(props) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

  return (
    <Card>
        <TouchableOpacity style={styles.title} onPress={() => toggleAccordion()}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>

        { isOpen && props.children}
    </Card>
  )
}

const styles = StyleSheet.create({
    title:{
        backgroundColor: "#edede9",
        borderBottomWidth: 2,
        borderBottomColor: "#edede9",
        padding: 8,
        borderRadius: 8,
        overflow: "hidden",

    }
})