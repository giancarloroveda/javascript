const obj1 = {
    nome: 'gian',
    idade: 17
}

const obj2 = {
    nome: 'maria',
    idade: 21
}

const obj3 = {
    nome: 'daniel',
    idade: 43
}

Object.freeze(obj1)
Object.seal(obj2)
Object.preventExtensions(obj3)

console.log(Object.isFrozen(obj1))
console.log(Object.isSealed(obj1))
console.log(Object.isExtensible(obj1))
console.log('------------------------------')
console.log(Object.isFrozen(obj2))
console.log(Object.isSealed(obj2))
console.log(Object.isExtensible(obj2))
console.log('------------------------------')
console.log(Object.isFrozen(obj3))
console.log(Object.isSealed(obj3))
console.log(Object.isExtensible(obj3))
