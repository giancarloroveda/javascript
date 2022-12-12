const pai = {
    nome: 'pai',
    falar: function(msg){
        console.log(`${this.nome} está falando: ${msg}`)
    }
}

const filho = Object.create(pai, {
    nome: {
        value: 'filho',
        enumerable: true
    }
})


const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const obj2 = {
    a: 'a2',
    b: 'b2'
}

Object.defineProperties(obj2, {
    naoEnumeravel: {
        value:'nao enumeravel'
    },
    enumeravel: {
        value: 'enumeravel',
        enumerable: true
    }
    
    
})

// const filha = Object.assign(obj1, filho, obj2)



const clone = Object.assign({}, obj1)

obj1.d = 'd'

console.log(clone)
// console.log(filha)

const obj3 = {...obj1, ...obj2}
const obj4 = {...obj2, ...obj1}

obj1.e = 'e'

console.log(obj3)
console.log(obj4)

console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))