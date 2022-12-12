'use strict'

const pessoa = {
    nome: "Gian"
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))

/* 
writable -> se o valor pode ser reescrito ou não;
enumerable -> se a propriedade será enumerada em um loop for in, por exemplo;
configurable -> se a propriedade pode ser reconfigurada. O único caminho possivel, após setado o configurable: false, é mudar o writable de true para false;
*/

Object.defineProperty(pessoa, 'sobrenome', {
    value: 'Roveda de Jesus',
    writable:true,
    enumerable:true,
    configurable:true
})

Object.defineProperty(pessoa, 'sobrenome', {
    configurable: false
})


Object.defineProperty(pessoa, 'sobrenome', {
    writable: false
})

// pessoa.sobrenome = 'outro sobrenome'

Object.defineProperties(pessoa, {
    prop1: {
        value: 'prop1',
        writable: true
    },
    prop2: {
        value: 10,
        writable: false
    }


})

console.log(pessoa)

console.log(Object.getOwnPropertyDescriptor(pessoa, 'sobrenome'))

for(let prop in pessoa){
    console.log(prop)
}

