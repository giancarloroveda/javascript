// indexOf(), lastIndexOf(), includes(), find(), findIndex()
const arr = [3, 5, 10, 20, 30, 5]
console.log(arr.indexOf(5)) //retorna o indice de um elemento do array. Se repetir, retorna o primeiro (se nao encontrar retorna -1)
console.log(arr.lastIndexOf(5)) //retorna o ultimo indice encontrado (se nao encontrar retorna -1)
console.log(arr.includes(5)) //verifica se um elemento está no array e retorna um booleano
console.log(arr.find(function (el, i, _arr){ //retorna o primeiro valor que retornar true na função. (se nao encontrar retorna undefined)
    return el > 3
}))
console.log(arr.findIndex(function (el, i, _arr){ //retorna o indice (se nao encontrar retorna -1)
    return el > 3
}))
