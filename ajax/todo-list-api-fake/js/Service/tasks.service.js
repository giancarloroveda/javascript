import { createPromise } from "../createPromisse.js";
import { Task } from "../Model/Task.model.js";
import { urlUsers, urlTasks } from "../config.js";

export default class TasksService {
    constructor() {
        this.tasks = [];
    }

    add(task, cb, error, userId) {
        createPromise("POST", `${urlUsers}/${userId}/tasks`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    getTasks(userId, success, error) {
        const fn = (dados) => {
            if (dados.error) {
                return;
            }

            this.tasks = dados.map((task) => {
                const { title, completed, createdAt, updatedAt, id } = task;
                return new Task(title, completed, createdAt, updatedAt, id);
            });

            if (typeof success === "function") success(this.tasks);
            return this.tasks;
        };

        return createPromise("GET", `${urlUsers}/${userId}/tasks`)
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
        createPromise("DELETE", `http://localhost:3000/tasks/${id}`)
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    edit(task, cb, error, userId) {
        createPromise("PATCH", `${urlTasks}/${task.id}`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    getTaskById(id) {
        return this.tasks.find((task) => task.id === parseInt(id));
    }
}
