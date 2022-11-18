//ES5
function Animal(){}
    
Animal.prototype.whoAmI = function(){
    return this
}

Animal.categoria = "ser vivo"

const dog = new Animal()

//ES6
class Cachorro {
    constructor(nome){
        this.nome = nome
        console.log('chamando método estático de dentro do constructor')
        Cachorro.beber()
    }

    static comer(){ //Ao usar a palavra static o this passa a ser a propria classe cachorro, ao invez do objeto criado.
        // console.log(this)
        console.log('comendo') 
        this.beber()
    }

    static beber(){
        console.log('bebendo')
    }
}

const dog2 = new Cachorro('petuxo')