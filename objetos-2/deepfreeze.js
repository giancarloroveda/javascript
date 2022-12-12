const obj1 = {
    foo: 'bar',
    internalProp: {
        foo: 'bar 2'
    }
}
// console.log(Object.freeze(obj1))
Object.freeze(obj1)

obj1.foo = 'alterado'
obj1.internalProp.foo = 'alterado'

// console.log(obj1)

obj1.internalProp = {teste: 'teste'}

// console.log(obj1)

function deepFreeze(obj) {
    let propNames = Object.getOwnPropertyNames(obj)
    console.log(obj)
    console.log(propNames)
    propNames.forEach(nome => {
        let prop = obj[nome]
        console.log(prop)
        if(typeof prop === "object" && prop !== null) {
            deepFreeze(prop)
        }
    })
    
    return Object.freeze(obj)
    
}

const obj2 = {
    foo: 'bar',
    internalProp: {
        array: [1,2,3],
        internalObj: {
            prop1: 'prop1'
        }
    },
    internalProp2: {
        prop2: 'prop2'
    }
}

deepFreeze(obj2)

// obj2.internalProp.array.push(4) //Error

obj2.internalProp.internalObj.prop1 = 'alterado'

// console.log(obj2)

