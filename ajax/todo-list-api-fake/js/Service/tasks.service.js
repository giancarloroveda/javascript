import { createFetch } from "../createFetch.js";
import { Task } from "../Model/Task.model.js";
import { urlUsers, urlTasks } from "../config.js";

export default class TasksService {
    constructor() {
        this.tasks = [];
    }

    add(task, cb, error, userId) {
        createFetch("POST", `${urlUsers}/${userId}/tasks`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    async getTasks(userId, success, error) {
        const fn = (dados) => {
            this.tasks = dados.map((task) => {
                const { title, completed, createdAt, updatedAt, id } = task;
                return new Task(title, completed, createdAt, updatedAt, id);
            });

            if (typeof success === "function") success(this.tasks);
            return this.tasks;
        };

        return createFetch("GET", `${urlUsers}/${userId}/tasks`)
            .then((response) => {
                return fn(response);
            })
            .catch((erro) => {
                if (typeof error === "function") {
                    return error(erro.message);
                }
                throw Error(erro.message);
            });
    }

    remove(id, cb, error, userId) {
        createFetch("DELETE", `http://localhost:3000/tasks/${id}`)
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    edit(task, cb, error, userId) {
        createFetch("PATCH", `${urlTasks}/${task.id}`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    getTaskById(id) {
        return this.tasks.find((task) => task.id === parseInt(id));
    }
}
