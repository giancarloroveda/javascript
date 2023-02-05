const express = require("express")
const tasksRoutes = require("./routes/tasks.routes")

const app = express()

app.use(express.static("./public"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/tasks", tasksRoutes)

module.exports = app