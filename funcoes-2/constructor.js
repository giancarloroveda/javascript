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