import { createXMLHttpRequest } from "../createXMLHttpRequest.js"
import { Task } from "../Model/Task.model.js"

const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"

export default class TasksService{
    constructor(){
        this.tasks = []
    }
    

    add(task, cb, userId){
        if(!task instanceof Task) {
            throw TypeError("task must be an instance of Task")
        }

        const fn = () => {
            this.getTasks(userId, cb)
        }

        createXMLHttpRequest("POST", `${urlUsers}/${userId}/tasks`, fn, JSON.stringify(task))
    }

    getTasks(userId, cb) {
        const fn = (dados) => {
            if(dados.error){return}
            this.tasks = dados.map(task => {
                const { title, completed, createdAt, updatedAt, id } = task
                return new Task(title, completed, createdAt, updatedAt, id)
            })

            if(typeof cb === "function") cb(this.tasks)
        }

        createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, fn)
    }

    remove(id, cb, userId) {
        const fn = () => {
            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("DELETE", `http://localhost:3000/tasks/${id}`, fn)
    }

    edit(id, userId, newTitle, cb) {
        const fn = () => {
            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("PATCH", `${urlTasks}/${id}`, fn, JSON.stringify({title: newTitle, updatedAt: Date.now()}))
    }

    toggleCheckBtn(id, cb, userId) {
        const getCompletedStatus = (task) => {
            let completed = task.completed
            createXMLHttpRequest("PATCH", `${urlTasks}/${id}`, fn, JSON.stringify({completed: !completed}))
        }
        const fn = () => {

            this.getTasks(userId, cb)
        }
        createXMLHttpRequest("GET", `${urlTasks}/${id}`, getCompletedStatus)
        
    }
}