const _set = new Set()
const _weakSet = new WeakSet()

_set.add(1)
_set.add(5)
_set.add(3)
_set.add(9)
console.log(_set.has(9))
console.log(_set.size)
_set.delete(9)
console.log(_set.has(9))
console.log('-------------')
for (let x of _set) {
    console.log(x)
}
console.log('------------- keys')
for (let k of _set.keys()) {
    console.log(k)
}
console.log('------------- values')
for (let v of _set.values()) {
    console.log(v)
}

;(function(){
    const obj1 = {prop1: 'prop1'}
    const obj2 = {prop2: 'prop2'}
    _set.add(obj1)
    _weakSet.add(obj2)
})()

console.log(_set.keys()) //com o Set, mesmo após a referência original não existir mais, ela continuará armazenada no Set. Já no WeakSet, será removido. 


