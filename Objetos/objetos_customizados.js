const task1 = {
    name: 'task 1',
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

function changeName(name){
    this.name = name
    this.updatedAt = new Date()
}

console.log(task1)

task1.changeName("TASK 1")

console.log(task1)