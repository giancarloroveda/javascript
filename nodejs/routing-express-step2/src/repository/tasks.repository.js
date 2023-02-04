const tasks = require("../../data/tasks.json")

exports.get = async (id) => {
    if (id) {
        return tasks.find(task => task.id === parseInt(id))
    }
    return tasks
}

exports.post = async (data) => {
    const newData = {
        ...data,
        id: tasks[tasks.length - 1].id + 1
    }
    tasks.push(newData)
    return newData
}

exports.put = async (id, data) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    tasks.splice(taskIndex, 1, data)
    return data
}

exports.patch = async (id, data) => {
    const taskById = tasks.find(task => task.id === parseInt(id))
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    const patchedTask = {...taskById, ...data}
    tasks.splice(taskIndex, 1, patchedTask)
    return patchedTask
}

exports.delete = async (id) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    return tasks.splice(taskIndex, 1)
}