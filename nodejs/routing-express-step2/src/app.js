const express = require("express")
const tasksRouter = require("./routes/tasks.routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.status(200).send({ "message": "API works!" })
})

app.use("/tasks", tasksRouter)

module.exports = app