// function somar(arr){
//     let soma = 0

//     for(let i = 0; i < arr.length; i++){
//         soma += arr[i]
//     }

//     return soma
// }

// console.log(somar([1, 2, 3]))

function somar(){
    console.log(arguments)
    let soma = 0

    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }

    return soma
}

console.log(somar(1, 2, 3, 7, 10))

console.log(somar.name) //propriedade .name retorna o nome da função