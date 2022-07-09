// push(), pop(), shift(), unshift(), slice(), splice()
let arr = [1, 5, 10, 20, 30]

let teste = arr.push("ola mundo", 50) //adiciona novos elementos no final da array (retorna o novo arr.length)
console.log(teste)
console.log(arr)

teste = arr.pop() //remove o ultimo elemento da array (retorna esse elemento)
console.log(teste)
console.log(arr)

teste = arr.shift() //remove o primeiro elemento da array (retorna esse elemento)
console.log(teste)
console.log(arr)

teste = arr.unshift(9, 7, ["oi", true]) // adiciona novos elementos no começo da array (retorna o novo arr.length)
console.log(teste)
console.log(arr)

teste = arr.slice(3, 5) //retorna valores selecionados do array -> "a partir do elemento[3] e para antes do elemento[5]"
console.log(teste)
console.log(arr)

teste = arr.splice(2, 4, "adicionado com splice", 4, 60) // "a partir do indice 2 vai remover quatro numeros e depois adicionar os proximos parametros"
console.log(teste)                                       // retorna os elementos removidos
console.log(arr)


