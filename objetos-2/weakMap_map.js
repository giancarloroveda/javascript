 const myMap = new Map()
 const obj = new Object()

 myMap.set(obj, 'objeto')

console.log(myMap.get(obj))
console.log(myMap)

const myMap2 = new Map([[1, 'um'], [2, 'dois'], [3, 'tres']])

console.log(myMap2)
console.log(myMap2.get(1))
console.log(myMap2.get(2))
console.log(myMap2.get(3))
console.log(myMap2.keys())
console.log(myMap2.values())
console.log(myMap2.entries())
console.log(myMap2.has(4))

for (let k of myMap2.keys()) {
    console.log(k)
}

for (let v of myMap2.values()) {
    console.log(v)
} 


let _contador = new WeakMap()

class Contador {
    constructor(){
        _contador.set(this, 0)
    }
    increment(){
        _contador.set(this, _contador.get(this) + 1)
        console.log(_contador.get(this))
    }
    get contador(){
        return _contador.get(this)
    }
}

const c1 = new Contador()

console.log('---------------')
console.log(c1.contador)
c1.increment()
c1.increment()
c1.increment()
c1.increment()
console.log(c1.contador)
console.log(c1)
console.log(_contador)
