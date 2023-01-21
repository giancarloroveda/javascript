import { Task } from "./Model/Task.model.js"
import { createXMLHttpRequest } from "./createXMLHttpRequest.js"
import TasksService from "./Service/tasks.service.js"
import TasksView from "./View/tasks.view.js"
import TasksController from "./Controller/tasks.controller.js"

const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"

const userId = 2

const itemInput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")
const ul = document.getElementById("todo-list")
const lis = ul.getElementsByTagName("li")

const tasksService = new TasksService()
const tasksView = new TasksView(ul)
const tasksController = new TasksController(tasksView, tasksService)


// createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, init)

tasksService.getTasks(userId, init)

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()

    tasksController.add(itemInput.value, userId)

    itemInput.value = ""
    itemInput.focus()
});


function init(arrTasks){
    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks

    // if (arrTasks.error) {
    //     return
    // }
   
    // const arrInstancesTasks = arrTasks.map(task => {
    //     const { title, completed, createdAt, updatedAt } = task
    //     return new Task(title, completed, createdAt, updatedAt)
    // })
    
    //ARMAZENAR O DOM EM VARIAVEIS

    tasksView.render(tasksService.tasks)

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";
            },
            deleteButton: function () {
                tasksController.remove(currentLi.getAttribute("data-id"), userId)

            },
            containerEditButton: function () {
                const newTitle = currentLi.querySelector(".editInput").value
                tasksController.edit(currentLi.getAttribute("data-id"), userId, newTitle)
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].getTitle()
            },
            checkButton: function () {
                tasksController.toggleCheckBtn(currentLi.getAttribute("data-id"), userId)
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }

    ul.addEventListener("click", clickedUl)
}


    

