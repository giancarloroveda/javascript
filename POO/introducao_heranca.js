function Animal(tipo){
    if(tipo) {
        this.tipo = tipo
    }
}

Animal.prototype.obterTipo = function(){
    return this.tipo
}


Animal.prototype.tipo = "desconhecido"

function Cachorro(nome, tipo){
    this.nome = nome
    Animal.call(this, tipo)
    // this.constructor = Cachorro
    Object.defineProperty(Cachorro.prototype, "constructor", {
        value: Cachorro,
        enumerable: false
    })
    
}


Cachorro.prototype = new Animal()

let rex = new Cachorro("Rex", "mamífero")

console.log(rex.obterTipo())
console.log(rex)

for(let prop in rex) {
    if(rex.hasOwnProperty(prop)){
        console.log(prop)
    }
}

console.log(rex instanceof Animal)
console.log(Animal.prototype.isPrototypeOf(rex))
console.log(Object.getPrototypeOf(rex))
