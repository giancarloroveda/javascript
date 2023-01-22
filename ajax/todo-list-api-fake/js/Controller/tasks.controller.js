import { Task } from "../Model/Task.model.js";
import { userId } from "../config.js";

export default class TasksController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
    }

    add(title) {
        this.service.add(
            new Task(title),
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
        task.updatedAt = Date.now();
        this.service.edit(
            task,
            () => this.view.render(this.service.tasks),
            (error) => alert(error),
            userId
        );
    }

    toggleDone(id) {
        const task = this.service.getTaskById(parseInt(id));
        const { completed } = task;
        this.edit({ completed: !completed, id: parseInt(id) }, userId);
    }

    getTasks() {
        this.service.getTasks(
            userId,
            () => this.view.render(this.service.tasks),
            (error) => alert(error)
        );
    }
}
