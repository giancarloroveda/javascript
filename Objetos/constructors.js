function Task(name) {
    "use strict"
    console.log(this)
    let _name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.getName = function () {
        return _name
    }
    this.changeName = function (newName) {
        if(newName) {
            _name = newName
            this.updatedAt = new Date()
        }
    }
}

// const task1 = new Task('task 1')
// console.log(task1.getName())
// console.log(task1)
// task1.changeName('TASK 1')
// console.log(task1.getName())

const task2 = new Task('task 2')
