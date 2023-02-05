const repository = require("../repository/tasks.repository")

exports.get = async (req, res) => {
    try {
        let tasks = await repository.get()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e.message })
    }

}

exports.post = async (req, res) => {
    const { title, userId } = req.body

    if (!title || !userId || isNaN(userId)) {
        return res.status(400).send({ message: "error 400", err: "Requisição inválida." })
    }

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
        res.status(500).send({ message: "error 500", err: e.message })
    }


}

exports.getById = async (req, res) => {
    try {
        let task = await repository.get(req.params.id)
        if (task) {
            res.status(200).send(task)
        } else {
            res.status(404).end()
        }
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e.message })
    }

}

exports.put = async (req, res) => {
    const { title, completed, createdAt, userId } = req.body
    const updatedAt = Date.now()
    let id = req.params.id
    const newTask = { title, completed, createdAt, updatedAt, userId }
    const values = Object.values(newTask)

    if (values.some(value => value === undefined)) {
        return res.status(400).send({ message: "error 400", err: "Requisição inválida." })
    }

    try {
        const data = await repository.put(id, newTask)
        if (data) {
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e.message })
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
        if (patchedTask) {
            res.status(200).send(patchedTask)
        } else {
            res.status(404).end()
        }
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e.message })
    }


}

exports.delete = async (req, res) => {
    try {
        const deletedTask = await repository.delete(req.params.id)
        if (deletedTask) {
            res.status(200).send(deletedTask)
        } else {
            res.status(404).end()
        }
    } catch (e) {
        res.status(500).send({ message: "error 500", err: e.message })
    }

}