const repository = require("../repository/tasks.repository")

exports.get = async (req, res) => {
    try {
        let tasks = await repository.get()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e })
    }

}

exports.post = async (req, res) => {
    const { title, userId } = req.body

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId,
    }
    try {
        const addedTask = await repository.post(newTask)
        res.status(201).send(addedTask)
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e })
    }


}

exports.getById = async (req, res) => {
    try {
        let task = repository.get(req.params.id)
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e })
    }

}

exports.put = async (req, res) => {
    const { title, completed, createdAt, updatedAt, userId } = req.body
    const newTask = { title, completed, createdAt, updatedAt, id: req.params.id, userId }
    try {
        const data = await repository.put(req.params.id, newTask)
        res.send(data)
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e })
    }

}

exports.patch = async (req, res) => {
    const { title, completed, userId } = req.body

    const updatedAt = Date.now()

    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    try {
        const patchedTask = await repository.patch(req.params.id, taskUpdated)
        res.send(patchedTask)
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e })
    }


}

exports.delete = async (req, res) => {
    const deletedTask = await repository.delete(req.params.id)
    res.send(deletedTask)
}