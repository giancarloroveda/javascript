//todas as DECLARAÇÕES DE FUNÇÕES são "içadas" para o começo do script
//ou seja, todas as funções criadas no script sao válidas, 
// mesmo antes da sua linha ser lida

teste()

function teste(){
    console.log("teste")
}

//O mesmo não ocorre com FUNCTION EXPRESSION



const teste1 = function teste1 () {
    console.log(teste1)
}

teste1()


//Quando se fala de variáveis: a variável(referência) é criada,
//mas não tem valor definido (apenas variável VAR tem hoisting. let e const, não)

console.log(minhaVar)
var minhaVar = "variável"
