// criar um array com numeros randomicos nao repetidos
function randomNumberGenerator(max) {
    return parseInt(Math.random() * max) //Math.random() gera um numero aleatório tal qual, {n E Q / 0 < n < 1}
}

let arr = []

while(arr.length < 20) {
    let randomNumber = randomNumberGenerator(50)

    if(arr.indexOf(randomNumber) === -1) { //indexOf serve para procurar o indice de algo em um array, caso o parâmetro 
        arr.push(randomNumber)          //colocado não seja encontrado no array o metodo retorna o valor -1
    } else {
        console.log(`O número ${randomNumber} já foi adicionado ao Array`)
    }
    }
    console.log(arr)    
                                  
    

