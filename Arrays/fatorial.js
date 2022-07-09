// let numero = 6
// let fixo = numero



// function calcularFatorial(){
//     numero--
//     while(numero > 0){
//         fixo *= numero
//         numero--
//     }
//     return fixo
// }  
// calcularFatorial()
// console.log(fixo)
let numero = 5

function calcularFatorial(n){

    let result = 1

    for(let i = 1; i <= numero; i++){
        result = result * i
        
    }

    return console.log(result)
}
calcularFatorial(numero)

