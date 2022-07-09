/*const numeros = [1, 3, 5, 10, 9, 4, 5, 3, 7, 8, 1, 11, 7]


let numerosUnicos = numeros.reduce(function(array, numeroAtual){
    
    let verificarAtual = array.some(function(el){
      return el === numeroAtual
    })
    
    if(!verificarAtual){
        array.push(numeroAtual)
    }
    
    return array
}, [])

console.log(numerosUnicos) */

// OU

const numeros = [1, 3, 5, 10, 9, 4, 5, 3, 7, 8, 1, 11, 7]

let numerosUnicos = numeros.reduce(function(array, numeroAtual){
  if(array.indexOf(numeroAtual) < 0){
    array.push(numeroAtual)
  }
  return array
}, [])
console.log(numerosUnicos)