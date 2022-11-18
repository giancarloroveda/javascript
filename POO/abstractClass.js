class Animal{
    constructor(tipo){
        console.log(this.constructor)
        if(this.constructor === Animal){
            throw new Error("Animal é uma classe abstrata")
        }
        if(tipo){
            this.tipo = tipo
        }
    }

    comer(){
        throw new Error("Método 'comer()' precisa ser implementado")
    }
}

class Gato extends Animal {
    constructor(nome){
        super("mamífero")
        this.nome= nome
    }
    comer(){
        console.log(`${this.nome} está comendo!`)
    }
}

const mingal = new Gato('Mingal')
const animal = new Animal("mamífero")