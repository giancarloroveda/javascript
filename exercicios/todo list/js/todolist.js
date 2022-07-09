(function(){
    "use strict"
    const newItemInput = document.querySelector("#item-input")
    const form = document.querySelector("#todo-add")
    const ul = document.querySelector("#todo-list")
    const lis = document.getElementsByClassName("todo-item")
    
    let arrTasks = getLocalData()

    function loadLocalStorage(){
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }
    
    function getLocalData(){
        let data = JSON.parse(localStorage.getItem("tasks"))
        return data ? data : []
    }

    form.addEventListener("submit", function(e){
        e.preventDefault()
        if(newItemInput.value){addItem(newItemInput.value)
            renderTasks()
            newItemInput.value = ""
            newItemInput.focus()
            
        } else {
            alert("Digite o nome da tarefa!")
        }
        
        
    })
    

    ul.addEventListener("click", function(e){

        let currentLi = e.target
        
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }
        
        let currentLiIndex = [...lis].indexOf(currentLi)
        


        const actions = {
            chkBtn: function() {
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
                loadLocalStorage()
                renderTasks()
                
            },
            
            editBtn: function(){
                const containers = document.querySelectorAll(".editContainer");
                [...containers].forEach(function(el){
                    el.style.display = "none"
                })
                const editContainer = currentLi.querySelector(".editContainer")
                editContainer.style.display =  "flex"
                
            },

            editButton: function(){
                const newTaskName = currentLi.querySelector(".editInput")
                if(newTaskName.value === ""){newTaskName.focus()}else{currentLi.querySelector(".task-name").textContent = newTaskName.value
                arrTasks[currentLiIndex].name = newTaskName.value
                currentLi.querySelector(".editContainer").style.display = "none"
                newTaskName.value = ""}
                loadLocalStorage()
            },

            cancelButton:  function(){
                currentLi.querySelector(".editContainer").style.display = "none"
            },

            delBtn: function(){
                arrTasks.splice(currentLiIndex, 1)
                loadLocalStorage()
                renderTasks()
            }
        }
        actions["chkBtn"]

        let dataAction = e.target.getAttribute("data-action")
        
        if(actions[dataAction]){            
            actions[dataAction]()
        }

        
        
    })


    



    function addItem(taskName){
        arrTasks.push({
            name: taskName,
            completed: false
        })
        loadLocalStorage()
        
    }

    function createLi(obj){
        const li = document.createElement("li")
        li.className = "todo-item"

        const chkBtn = document.createElement("button")
        chkBtn.className = "button-check"
        chkBtn.innerHTML = `<i class="fas fa-check ${obj.completed ? '' : 'displayNone'} " data-action="chkBtn"></i>`
        chkBtn.setAttribute("data-action", "chkBtn")

        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = obj.name

        const editBtn = document.createElement("i")
        editBtn.className = "fas fa-edit"
        editBtn.setAttribute("data-action", "editBtn")

        const editContainer = document.createElement("div")
        editContainer.className = "editContainer"

        const editInput = document.createElement("input")
        editInput.className = "editInput"
        editInput.setAttribute("type", "text")

        const editButton = document.createElement("button")
        editButton.className = "editButton"
        editButton.textContent = "Edit"
        editButton.setAttribute("data-action", "editButton")

        const cancelButton = document.createElement("button")
        cancelButton.className = "cancelButton"
        cancelButton.textContent = "Cancel"
        cancelButton.setAttribute("data-action", "cancelButton")

        const delBtn = document.createElement("i")
        delBtn.className = "fas fa-trash-alt"
        delBtn.setAttribute("data-action", "delBtn")

        editContainer.append(editInput, editButton, cancelButton)

        li.append(chkBtn, p, editBtn, editContainer, delBtn)

        return li
    }

    function renderTasks(){
        ul.innerHTML = ""
        arrTasks.forEach(function(obj){
            ul.appendChild(createLi(obj))
        })
    }

    renderTasks()
    loadLocalStorage()
})()

