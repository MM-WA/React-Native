import React from 'react'
import { useState } from 'react'
import {
    StyleSheet, Text,
    TouchableWithoutFeedback,
    View, Modal,
    TextInput
} from 'react-native'

export default function AddTask() {
    const [modalVisible, setModalVisible] = useState(false)
    const [taskText, setTaskText] = useState("")

    return (
        <View style = {{flex: 1}}>
            <View style={styles.addButtonContainer}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}> + </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TextInput
                            placeholder='New Task'
                            onChangeText={(text) => setTaskText(text)}
                            multiline={true}
                            style={styles.modalInputField_1}
                        />

                        <TextInput
                            placeholder='Add Details'
                            onChangeText={(text) => setTaskText(text)}
                            multiline={true}
                            style={styles.modalInputField_2}
                        />

                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                            <View style={styles.modalButton}>
                                <Text style={styles.modalButtonText}> Add </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    addButtonContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginRight: 40,
        marginBottom: 50
    },
    addButton: {
        height: 60,
        width: 60,
        backgroundColor: "#D3D3D3", //light gray
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
        elevation: 3
    },
    addButtonText: {
        fontSize: 25,
        color: "black"
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    modal: {
        height: 250,
        width: 360,
        backgroundColor: "#D3D3D3",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        elevation: 3
    },
    modalInputField_1: {
        height: 40,
        width: 320,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginBottom: 5,
        elevation: 2,
        textAlignVertical: "center"
    },
    modalInputField_2: {
        height: 100,
        width: 320,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        elevation: 2,
        marginBottom: 10,
        textAlignVertical: "top"
    },
    modalButton: {
        height: 60,
        width: 60,
        backgroundColor: "#D3D3D3", //light gray
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
        elevation: 3
    },
    modalButtonText: {
        color: "black"
    }
})
