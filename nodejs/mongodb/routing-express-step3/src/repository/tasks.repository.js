const mongoose = require("mongoose")
const Task = require("./../models/task.model")

exports.get = (id) => {
    if (id) {
        return Task.findById(id)
    }
    return Task.find({})
}

exports.post = (data) => {
    // const newData = {
    //     ...data,
    //     id: tasks[tasks.length - 1].id + 1
    // }
    const newData = { ...data }
    // tasks.push(newData)
    return Task.create(newData)
    // return newData
}

exports.put = (id, data) => {
    // const taskIndex = tasks.findIndex(task => task.id === id)
    // if (taskIndex < 0) return null
    // tasks.splice(taskIndex, 1, data)
    return Task.findByIdAndUpdate(id, data, {
        returnDocument: "after"
    })
}

exports.patch = (id, data) => {
    // const taskById = tasks.find(task => task.id === parseInt(id))
    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    // if (taskIndex < 0) return null
    // const patchedTask = { ...taskById, ...data }
    // tasks.splice(taskIndex, 1, patchedTask)
    return Task.findByIdAndUpdate(id, data, { returnDocument: "after" })
}

exports.delete = (id) => {
    // const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    // if (taskIndex < 0) return null
    // return tasks.splice(taskIndex, 1)
    return Task.findByIdAndRemove(id)
}