function Animal(tipo){
    this.tipo = tipo
}

Animal.prototype.obterTipo = function(){
    return this
}

let cachorro = new Animal("mamífero")
let gato = new Animal("mamífero")
let cobra = new Animal("reptil")

console.log(Animal.prototype.obterTipo.call(cobra))

console.log(cachorro.__proto__ === Animal.prototype)