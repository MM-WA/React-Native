import React, { useEffect } from 'react'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from '@react-native-community/checkbox'
import {
    StyleSheet, Text,
    TouchableWithoutFeedback,
    View, Modal,
    TextInput,
    ScrollView
} from 'react-native'


export default function AddTask() {
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false)
    const [updateTaskModalVisible, setupdateTaskModalVisible] = useState(false)
    const [task, setTask] = useState("")
    const [taskDetails, setTaskDetails] = useState("")
    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)

    const addTask = function () {
        if (task || taskDetails) {
            const newTask = {
                task: task,
                taskDetails: taskDetails,
                checkBoxChecked: false
            }

            setTasks([...tasks, newTask])
            setTask("")
            setTaskDetails("")

            saveTasks([...tasks, newTask])
        }

        setAddTaskModalVisible(false)
    }

    const saveTasks = async (tasks) => {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks))
    }

    const loadTasks = async () => {
        let tasks = await AsyncStorage.getItem("tasks")
        tasks = await JSON.parse(tasks)
        setTasks(tasks)
    }

    const toggleCheckBox = (index) => {
        let updatedTasks = [...tasks]
        updatedTasks[index].checkBoxChecked = !updatedTasks[index].checkBoxChecked

        setTasks(updatedTasks)
    }

    const update_Task = (task) => {
        if(task) {
            setupdateTaskModalVisible(true)
            setSelectedTask(task) 
        }
    }

    useEffect(() => {//componentDidMount
        loadTasks()
    }, [])

    useEffect(() => {//componentDidUpdate
        saveTasks(tasks)
    }, [tasks])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    tasks.length ?
                        tasks.map((task, index) => {
                            const taskStyle = {
                                textDecorationLine: task.checkBoxChecked ? "line-through" : "none"
                            }

                            return (
                                <TouchableWithoutFeedback onPress={() => update_Task(task)} key={index}>
                                    <View style={styles.taskDescription}>
                                        <View style={{ flexDirection: "row" }}>
                                            <CheckBox
                                                value={task.checkBoxChecked}
                                                onValueChange={() => toggleCheckBox(index)}
                                                tintColors={{ true: "black", false: "black" }}
                                            />
                                            <Text style={[styles.taskStyle, taskStyle]}> {task.task} </Text>
                                        </View>
                                        <Text style={styles.taskDetailsStyle}> {task.taskDetails} </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }) : null
                }

            </ScrollView>

            <View style={styles.addButtonContainer}>
                <TouchableWithoutFeedback onPress={() => setAddTaskModalVisible(true)}>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}> + </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <Modal
                visible={addTaskModalVisible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TextInput
                            placeholder='New Task'
                            onChangeText={(text) => setTask(text)}
                            multiline={true}
                            style={styles.modalInputField_1}
                        />

                        <TextInput
                            placeholder='Add Details'
                            onChangeText={(text) => setTaskDetails(text)}
                            multiline={true}
                            style={styles.modalInputField_2}
                        />

                        <TouchableWithoutFeedback onPress={() => addTask()}>
                            <View style={styles.modalButton}>
                                <Text style={styles.modalButtonText}> Add </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={updateTaskModalVisible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <TextInput
                            placeholder='New Task'
                            value = {selectedTask.task}
                            onChangeText={(text) => setTask(text)}
                            multiline={true}
                            style={styles.modalInputField_1}
                        />

                        <TextInput
                            placeholder='Add Details'
                            value = {selectedTask.taskDetails}
                            onChangeText={(text) => setTaskDetails(text)}
                            multiline={true}
                            style={styles.modalInputField_2}
                        />

                        <View style = {styles.updateModalButtons}>
                            <TouchableWithoutFeedback onPress = {() => setupdateTaskModalVisible(false)}>
                                <View style={styles.modalButton}>
                                    <Text style={styles.modalButtonText}> Cancel </Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress = {() => console.warn("Saved")}>
                                <View style={styles.modalButton}>
                                    <Text style={styles.modalButtonText}> Save </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
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
    }
})
