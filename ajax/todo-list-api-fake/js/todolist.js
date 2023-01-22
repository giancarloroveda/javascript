import TasksService from "./Service/tasks.service.js";
import TasksView from "./View/tasks.view.js";
import TasksController from "./Controller/tasks.controller.js";

const itemInput = document.getElementById("item-input");
const todoAddForm = document.getElementById("todo-add");
const ul = document.getElementById("todo-list");
const lis = ul.getElementsByTagName("li");

const tasksService = new TasksService();
const tasksView = new TasksView(ul);
const tasksController = new TasksController(tasksView, tasksService);

tasksController.getTasks();

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();

    tasksController.add(itemInput.value);

    itemInput.value = "";
    itemInput.focus();
});

function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action");
    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi.nodeName !== "LI") {
        currentLi = currentLi.parentElement;
    }
    const currentLiIndex = [...lis].indexOf(currentLi);

    const actions = {
        editButton: function () {
            const editContainer = currentLi.querySelector(".editContainer");

            [...ul.querySelectorAll(".editContainer")].forEach((container) => {
                container.removeAttribute("style");
            });

            editContainer.style.display = "flex";
        },
        deleteButton: function () {
            tasksController.remove(currentLi.getAttribute("data-id"));
        },
        containerEditButton: function () {
            const title = currentLi.querySelector(".editInput").value;
            const id = currentLi.getAttribute("data-id");
            tasksController.edit({ title, id });
        },
        containerCancelButton: function () {
            currentLi.querySelector(".editContainer").removeAttribute("style");
            currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].title;
        },
        checkButton: function () {
            const id = currentLi.getAttribute("data-id");
            tasksController.toggleDone(id);
        },
    };

    if (actions[dataAction]) {
        actions[dataAction]();
    }
}

ul.addEventListener("click", clickedUl);
