const obj1 = {
    nome: "Maria"
}

const obj2 = new Object()
obj2.nome = "João"
obj2['idade'] = 17

console.log(obj1)
console.log(obj2)

const str1 = "minha string"

console.log(str1.length)

const str2 = new String("objeto do tipo string")

console.log(str2)
console.log(str2.length)
console.log(str2.valueOf())

const data1 = Date()
console.log(data1)
console.log(typeof data1)

const data2 = new Date()
console.log(data2)
console.log(typeof data2)