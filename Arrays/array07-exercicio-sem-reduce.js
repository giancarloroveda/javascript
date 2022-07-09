const numeros = [1, 3, 5, 10, 9, 4, 5, 3, 7, 8, 1, 11, 7]
let arrNumerosUnicos = []
let numerosUnicos = numeros.forEach(function(el){
    if(arrNumerosUnicos.indexOf(el) < 0){
        arrNumerosUnicos.push(el)
    }
})
console.log(arrNumerosUnicos)