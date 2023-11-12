import React, { useEffect } from 'react'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CheckBox from '@react-native-community/checkbox'
import Styles from './Styles'
import { AddTaskModal, UpdateTaskModal } from './Modals'
import {
    Text,
    TouchableWithoutFeedback,
    View,
    ScrollView
} from 'react-native'

let taskIndex; //will use in save and cancle btn function in updating task.

export default function ManageTasks() {
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false)
    const [updateTaskModalVisible, setUpdateTaskModalVisible] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDetails, setTaskDetails] = useState("")
    const [taskCheckBox, setTaskCheckBox] = useState(false)
    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)

    const closeAddTaskModal = () => {
        setAddTaskModalVisible(false)
    }

    const closeUpdateTaskModal = () => {
        setUpdateTaskModalVisible(false)
    }

    const addTask = function () {
        if (taskTitle || taskDetails) {
            const newTask = {
                taskTitle: taskTitle,
                taskDetails: taskDetails,
                checkBoxChecked: false
            }

            setTasks([...tasks, newTask])
            setTaskTitle("")
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

    const update_Task = (task, index) => {
        taskIndex = index
        setSelectedTask(task)
        setUpdateTaskModalVisible(true)
    }

    const saveUpdatedTask = () => {
        const allTasks = tasks
        let updatedTask = {
            taskTitle: taskTitle,
            taskDetails: taskDetails,
            checkBoxChecked: taskCheckBox
        }

        allTasks[taskIndex] = updatedTask;
        setTasks(allTasks)
        // saveTasks(tasks) //componentDidUpdate will handle this
        setTaskTitle("")
        setTaskDetails("")

        setUpdateTaskModalVisible(false)
    }

    const deleteTask = () => {
        const allTasks = tasks
        const updatedTasks = allTasks.filter((task, index) => index != taskIndex)

        setTasks(updatedTasks)
        // saveTasks(tasks) //componentDidUpdate will handle this

        setUpdateTaskModalVisible(false)
    }

    useEffect(() => {
        if (selectedTask) {
            setTaskTitle(selectedTask.taskTitle)
            setTaskDetails(selectedTask.taskDetails)
            setTaskCheckBox(selectedTask.checkBoxChecked)
        }
    }, [selectedTask])

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
                        tasks.map((element, index) => {
                            const taskStyle = {
                                textDecorationLine: (element.checkBoxChecked && element.taskTitle) ? "line-through" : "none"
                            }

                            return (
                                <TouchableWithoutFeedback onPress={() => (update_Task(element, index))} key={index}>
                                    <View style={Styles.taskDescription}>
                                        <View style={{ flexDirection: "row" }}>
                                            <CheckBox
                                                value={element.checkBoxChecked}
                                                onValueChange={() => toggleCheckBox(index)}
                                                tintColors={{ true: "black", false: "black" }}
                                            />
                                            <Text style={[Styles.taskStyle, taskStyle]}> {element.taskTitle} </Text>
                                        </View>
                                        <Text style={Styles.taskDetailsStyle}> {element.taskDetails} </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }) : null
                }

            </ScrollView>

            <View style={Styles.addButtonContainer}>
                <TouchableWithoutFeedback onPress={() => setAddTaskModalVisible(true)}>
                    <View style={Styles.addButton}>
                        <Text style={Styles.addButtonText}> + </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <AddTaskModal
                visible = {addTaskModalVisible}
                onClose = {closeAddTaskModal}
                setTaskTitle = {setTaskTitle}
                setTaskDetails = {setTaskDetails}
                addTask = {addTask}
            />

            <UpdateTaskModal 
                visible = {updateTaskModalVisible}
                onClose = {closeUpdateTaskModal}
                taskTitle = {taskTitle}
                taskDetails = {taskDetails}
                setTaskTitle = {setTaskTitle}
                setTaskDetails = {setTaskDetails}
                deleteTask = {deleteTask}
                setUpdateTaskModalVisible = {setUpdateTaskModalVisible}
                saveUpdatedTask = {saveUpdatedTask}
            />
        </View>
    )
}

