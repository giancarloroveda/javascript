// toString(), join(), concat()
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log(arr1.toString()) //retorna todos os elementos como string e separados por vírgulas

console.log(arr1.join(" - ")) //retorna todos os elementos como string e separados pelo parametro colocado

console.log(arr1.concat(arr2, 9, "ola", true, [90, "quatro", 7])) // tranforma todos os parametros passados em elementos do array
                                                                  // inclusive elementos de outros arrays, passam a ser elementos desse array

let arr3 = [].concat(arr1) // serve também para criar copias de arrays (lembrar da aula de Valor x Referencia)
console.log(arr3)                                                                    
