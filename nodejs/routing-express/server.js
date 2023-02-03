const express = require("express")
const tasks = require("./data/tasks.json")


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/tasks", (req, res) => {
    console.log("bbbbbb")
    res.send(tasks)
})

app.post("/tasks", (req, res) => {
    console.log(req.body)
    const { title, userId } = req.body
    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        id: tasks[tasks.length - 1].id + 1,
        userId
    }

    tasks.push(newTask)
    res.send(newTask)
})

app.route("/tasks/:id")
    .get((req, res) => {
        res.send(tasks.find(task => task.id === parseInt(req.params.id)))
    })
    .put((req, res) => {
        const currentTaskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
        const { title, completed, createdAt, updatedAt, id, userId } = req.body
        const newTask = { title, completed, createdAt, updatedAt, id, userId }
        tasks.splice(currentTaskIndex, 1, newTask)

        res.send(newTask)
    })
    .patch((req, res) => {
        const { title, completed, userId } = req.body
        const currentTaskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
        const updatedAt = Date.now()
        const taskUpdated = { title, completed, userId, updatedAt }
        for (let prop in taskUpdated) {
            if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
        }
        const newTask = { ...tasks[currentTaskIndex], ...taskUpdated }
        tasks.splice(currentTaskIndex, 1, newTask)
        res.send(newTask)
    })
    .delete((req, res) => {
        const currentTaskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id))
        if (currentTaskIndex >= 0) {
            const deletedTask = tasks.splice(currentTaskIndex, 1)
            res.send(deletedTask)
        } else {
            res.send("tarefa não encontrada")
        }

    })

app.listen(3001)

