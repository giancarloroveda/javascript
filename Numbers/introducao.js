let numero = 1234567.890

console.log(numero.toFixed(5))  //numero de casas decimais
console.log(typeof numero.toFixed(5))

console.log(numero.toPrecision(7))
console.log(typeof numero.toPrecision(3))

console.log(numero.toExponential(3))

let numero2 = 15

console.log(numero2.toString(16))
console.log(numero2.toString(2))
console.log(numero2.toString(10))
console.log(typeof numero2.toString(2)) 

console.log((123456.789).toLocaleString('uk'))
console.log((123456.789).toLocaleString('en'))
console.log((123456.789).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


let numberAsString = 'a7.123'

console.log(isNaN(numberAsString))
console.log(numberAsString, typeof numberAsString, parseFloat(numberAsString))
