function criarCachorro(name) {
    let posicao = 0
    return {
        name: name,
        andar(distancia) {
            console.log(`${this.name} andou ${distancia}m`)
            posicao += distancia
        },
        latir() {
            console.log(`${this.name} está latindo!`)
        },
        get posicao(){
            console.log(`${this.name} está na posição ${posicao}`)

            return posicao
        }
    }
} 
 //Uma função factory cunpre o mesmo papel de uma função construtora. Enquanto uma retorna um objeto literal com as propriedades que voce quer, a outra cria um objeto do tipo, por exemplo, Cachorro.

function Cachorro(name){
    let posicao = 0
    _name = name
    this.andar = function (distancia) {
        console.log(`${_name} andou ${distancia}m`)
        posicao += distancia
    }
    this.latir = function() {
        console.log(`${_name} está latindo!`)
    }
    this.posicao = function() {
        console.log(`${_name} está na posição ${posicao}`)

        return posicao
    }
    this.nome = function() {
        return _name
    }
}

const rex = criarCachorro('Rex')
console.log(rex)
rex.andar(5)
rex.andar(3)
console.log(rex.posicao)

const petuxo = criarCachorro('Petuxo')
console.log(petuxo.posicao)

const lilica = new Cachorro('Lilica')
console.log(lilica)
lilica.andar(5)
lilica.latir()
console.log(lilica.nome())
