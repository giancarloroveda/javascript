import { createFetch } from "../createFetch.js";
import { Task } from "../Model/Task.model.js";
import { urlTasks } from "../config.js";


export default class TasksService {
    constructor() {
        this.tasks = [];
    }

    add(task, cb, error, userId) {
        createFetch("POST", `${urlTasks}`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    async getTasks(userId, success, error) {
        const fn = (dados) => {
            this.tasks = dados.map((task) => {
                const { title, completed, createdAt, updatedAt, _id } = task;
                return new Task(title, userId, completed, createdAt, updatedAt, _id);
            });

            if (typeof success === "function") success(this.tasks);
            return this.tasks;
        };

        return createFetch("GET", `${urlTasks}`)
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
        createFetch("DELETE", `${urlTasks}/${id}`)
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    edit(task, cb, error, userId) {
        console.log(task._id)
        createFetch("PATCH", `${urlTasks}/${task._id}`, JSON.stringify(task))
            .then(() => this.getTasks(userId))
            .then(() => cb())
            .catch((erro) => error(erro.message));
    }

    getTaskById(id) {
        const fn = response => {
            const { title, userId, completed, createdAt, updatedAt, _id } = response
            const _task = new Task(title, userId, completed, createdAt, updatedAt, _id)
            return _task
        }
        return createFetch("GET", `${urlTasks}/${id}`)
            .then(response => fn(response))
            .catch(error => {
                throw Error(error.message)
            })
    }
}
