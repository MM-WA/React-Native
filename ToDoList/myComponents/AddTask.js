import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

export default function AddTask() {
    function AddTask() {
        
    }
    return (
        <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback onPress = {() => console.warn("Hello")}>
                <View style={styles.buttonBoundry}>
                    <Text style={styles.buttonText}> + </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginRight: 40,
        marginBottom: 50
    },
    buttonBoundry: {
        height: 60,
        width: 60,
        backgroundColor: "#D3D3D3", //light gray
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#D3D3D3",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 30,
    }
})
