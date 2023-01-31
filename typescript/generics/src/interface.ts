type Action<T = string> = {
    action: T
}

const step1: Action<number> = {
    action: 10
}

step1.action = 30

const step2: Action<boolean> = {
    action: true
}

step2.action = false

const step3: Action = {
    action: "string teste"
}

console.log(step1)
console.log(step2)
console.log(step3)

type NumberOrString = number | string

interface ActionI<T extends NumberOrString = string, U = number> {
    action: T;
    timestamp: U
}

const step4: ActionI = {
    action: "2",
    timestamp: 123
}

console.log(step4)

const historyActions: Array<ActionI> = []

const addAction = <T extends ActionI & { id: number }>(obj: T) => {
    console.log("addAction")
    console.log(obj)
    const result = {
        ...obj,
        _id: obj.id + "_" + obj.timestamp
    }
    historyActions.push(result)
}

addAction({
    action: "2",
    timestamp: 123,
    teste: "ola",
    id: 10
})


console.log(historyActions)

export default null