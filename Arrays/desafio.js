// criar 2 funções -> sum() e average()



function sum(){
    let array = Array.from(arguments)
    if(arguments.length === 0){
        throw Error(`Você não digitou nenhum número`)
    }
    array.forEach(function(el){
        if(typeof el !== "number"){
            throw Error("Digite apenas numeros")
        }
    })
    let soma = array.reduce(function(previous, current){
        return previous + current
    })
    // let soma = 0
    // for(n of array){
    //     soma += n
    // }
    console.log(`A soma é: ${soma}`)
}
sum(1,2,3)

function average(){
    let array = Array.from(arguments)
    array.forEach(function(el){
        if(typeof el !== "number"){
            throw Error("Digite apenas numeros")
        }
    })
    let soma = 0
    for(n of array){
        soma += n
    }
    let media = soma / array.length
    console.log(`A média é: ${media}`)
}

average(2,4,6)




