import { Task } from "../Model/Task.model.js"

export default class TasksController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    add(title, userId) {
        this.service.add(new Task(title), () => this.view.render(this.service.tasks), userId)
    }

    remove(id, userId){
        this.service.remove(id, () => this.view.render(this.service.tasks), userId)
    }

    edit(id, userId, newTitle) {
        this.service.edit(id,userId, newTitle, () => this.view.render(this.service.tasks))
    }

    toggleCheckBtn(id, userId) {
        this.service.toggleCheckBtn(id, () => this.view.render(this.service.tasks), userId)
    }
}