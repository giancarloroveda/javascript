(function(){
function calcularMedia(){
    if(arguments[0] === undefined){
        return console.log(0)
    }

    let soma = 0

    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
        if(typeof soma !== "number"){
            throw Error("Você deve digitar apenas números")
        }
    }
    return console.log(soma / arguments.length) /*Outro jeito de fazer a função retornar 0 quando nenhum
    número for colocado como parametr é, ao invés de cria o if no começo do codigo, criar um curto circuito
    na linha 15 do tipo: console.log(soma / arguments.length || 0)*/ 
}

try {
    calcularMedia(3, 9, 18)
} catch (e) {
    console.log(e.message)
}
})()
    


    




    