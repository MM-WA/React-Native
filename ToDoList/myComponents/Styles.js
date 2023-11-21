import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
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
        justifyContent: "flex-end"
    },
    modal: {
        height: 250,
        width: 360,
        backgroundColor: "#D3D3D3",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    modalInputField_1: {
        width: 320,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginBottom: 5,
        elevation: 2,
        textAlignVertical: "top"
    },
    modalInputField_2: {
        width: 320,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        elevation: 2,
        marginBottom: 10,
        textAlignVertical: "top"
    },
    modalInner_1: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 15
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
    },
    taskDescription: {
        borderWidth: 0.5,
        width: 330,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 7,
        paddingLeft: 7
    },
    taskStyle: {
        fontSize: 19,
        color: "black",
        fontWeight: "600",
        paddingTop: 3,
        fontFamily: "times new roman"
    },
    taskDetailsStyle: {
        fontWeight: "400",
        color: "black",
        paddingLeft: 35,
        paddingTop: 5,
        fontFamily: "arial"
    },
    updateModalButtons: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        marginTop: 10,
    },
    defaultMessageContainer: {
        alignItems: "center",
        // justifyContent: "center", // not working
        marginTop: 330
    },
    defaultMessageText: {
        fontFamily: "times new roman",
        fontSize: 30
    },
    addTimeBtn: {
        height: 30,
        width: 90
    },
    addTimebtnText: {
        color: "black"
    },
    modalAddButtonContainer: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    }
})