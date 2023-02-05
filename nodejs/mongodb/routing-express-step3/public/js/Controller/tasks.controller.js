import { Task } from "../Model/Task.model.js";
import { userId } from "../config.js";

export default class TasksController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
    }

    add(title) {
        this.service.add(
            new Task(title, userId),
            () => this.view.render(this.service.tasks),
            (error) => alert(error),
            userId
        );
    }

    remove(id) {
        this.service.remove(
            id,
            () => this.view.render(this.service.tasks),
            (error) => alert(error),
            userId
        );
    }

    edit(task) {
        console.log(task._id)
        task.updatedAt = Date.now();
        this.service.edit(
            task,
            () => this.view.render(this.service.tasks),
            (error) => alert(error),
            userId
        );
    }

    async toggleDone(id) {
        const task = await this.service.getTaskById(id);
        const { completed } = task;
        this.edit({ completed: !completed, _id: id }, userId);
    }

    getTasks() {
        this.service.getTasks(
            userId,
            () => this.view.render(this.service.tasks),
            (error) => alert(error)
        );
    }
}
