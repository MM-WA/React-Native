import Styles from "./Styles"
import DateTimePicker from "react-native-modal-datetime-picker"
import {
    View, Text,
    TextInput,
    TouchableWithoutFeedback,
    Modal
} from "react-native"

export const AddTaskModal = ({ visible, onClose, setTaskTitle, setTaskDetails, addTask }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            onRequestClose={() => onClose()}
        >
            <View style={Styles.modalContainer}>
                <View style={Styles.modal}>
                    <View style={Styles.modalInner_1}>
                        <TextInput
                            placeholder='New Task'
                            onChangeText={(text) => setTaskTitle(text)}
                            multiline={true}
                            style={Styles.modalInputField_1}
                        />

                        <TextInput
                            placeholder='Add Details'
                            onChangeText={(text) => setTaskDetails(text)}
                            multiline={true}
                            style={Styles.modalInputField_2}
                        />

                        <TouchableWithoutFeedback onPress={() => addTask()}>
                            <View style={Styles.addTimeBtn}>
                                <Text style={Styles.addTimebtnText}> Date </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => addTask()}>
                            <View style={Styles.addTimeBtn}>
                                <Text style={Styles.addTimebtnText}> Time </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={Styles.modalAddButtonContainer}>
                        <View>
                            <TouchableWithoutFeedback onPress={() => addTask()}>
                                <View style={Styles.modalButton}>
                                    <Text style={Styles.modalButtonText}> Add </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export const UpdateTaskModal = ({ visible, onClose, taskTitle, taskDetails, setTaskTitle, setTaskDetails,
    deleteTask, setUpdateTaskModalVisible, saveUpdatedTask }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='slide'
            onRequestClose={() => onClose()}
        >
            <View style={Styles.modalContainer}>
                <View style={Styles.modal}>
                    <TextInput
                        placeholder='New Task'
                        value={taskTitle}
                        onChangeText={(text) => setTaskTitle(text)}
                        multiline={true}
                        style={Styles.modalInputField_1}
                    />

                    <TextInput
                        placeholder='Add Details'
                        value={taskDetails}
                        onChangeText={(text) => setTaskDetails(text)}
                        multiline={true}
                        style={Styles.modalInputField_2}
                    />

                    <View style={Styles.updateModalButtons}>
                        <TouchableWithoutFeedback onPress={() => deleteTask()}>
                            <View style={Styles.modalButton}>
                                <Text style={Styles.modalButtonText}> Delete </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => setUpdateTaskModalVisible(false)}>
                            <View style={Styles.modalButton}>
                                <Text style={Styles.modalButtonText}> Cancel </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => saveUpdatedTask()}>
                            <View style={Styles.modalButton}>
                                <Text style={Styles.modalButtonText}> Save </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export const DateTimeModal = () => {
    return (
        <DateTimePicker
            isVisible={true}
        />
    )
}