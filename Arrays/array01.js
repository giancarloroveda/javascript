const arr = [2, 5, 15, "string", true, undefined]

let arr1 = arr.every(function(el){  //verifica se todos os elementos do array cumprem os requisitos
    
    return typeof el === "number"
})
console.log(arr1)
//--------------
let arr2 = arr.some(function(el){ //verifica se pelo menos um elemento do array cumpre os requisitos
     
    return typeof el === "number" && el > 20
})
console.log(arr2)
//--------------
let arr3 = arr.filter(function(el, i, _arr){ //cria um novo array de acordo com os elementos que cumprem os requisitos passados
    return typeof el === "number" && i > 0
})
console.log(arr3)
//---------------
const arr_1 = []
arr.forEach(function(el, i, _arr){ //pode ser usado para realizar uma ação sobre um array (parecido com loop)(nao retorna nenhum valor)
    if(typeof el === "number"){
        arr_1.push(el)
    }
})
console.log(arr_1)
//---------------
const arr4 = arr3.map(function(el, i, _arr){ //cria um novo array fazendo alterações em outro array (nao muda o array usado como referencia)
    
    return el + 5
})
console.log(arr4)
console.log(arr3)
