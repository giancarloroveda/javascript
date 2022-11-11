// SEMPRE COLOCAR METODOS NO PROTOTYPE AO INVEZ DO PROPRIO OBJETO PARA CONSUMIR MENOS ESPAÇO NA MEMORIA.


function Animal(tipo){
    if(this instanceof Animal){  //Evitar que a função seja executada com this no escopo global. (sem operador new)
        tipo && (this.tipo = tipo)
    }
}

Animal.prototype.obterTipo = function(){
    return this
}

let cachorro = new Animal("mamífero")
let gato = new Animal("mamífero")
let cobra = new Animal("reptil")


//ES6

class AnimalC{  
    constructor(tipo){
        tipo && (this.tipo = tipo)
    }

    obterTipo(){
        return this.tipo
    }

}

class GatoC extends AnimalC{
    constructor(nome){
        super("mamifero")
        this.nome = nome
    }
}

//dentro da class só podem ser acidionados metodos.
AnimalC.prototype.tipo = "desconhecido"

let animal = new AnimalC('anfíbio')
let sapo = new AnimalC()

console.log(Object.getPrototypeOf(animal))

let flora = new GatoC('Flora')

console.log(flora)