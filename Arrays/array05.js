// reverse() -> inverte a ordem dos elementos de um array
// reduce()

const arr = [1, 2, 3]

// let arrReverso = arr.reverse()
// console.log(arrReverso)

let arrSoma = arr.reduce(function(acumulado, atual, i, _arr){
    console.log(acumulado)
    console.log(atual)
    console.log(i)
    console.log(_arr)
    return acumulado + atual
}, 0)
console.log(arrSoma)