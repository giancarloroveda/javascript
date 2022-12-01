(function(){
    let _quantidade = 0
    
    let _consultas = 0

    this.produto = {
        nome: 'produto',

        get quantidade(){
            console.log(`A quantidade disponível desse produto já foi consultada ${++_consultas} ${(_consultas > 1)? "vezes" : "vez"}.`)
            return `Existe(êm) ${_quantidade} produtos disponíveis`
        },
        set quantidade(n){
            if(n >= 0) {
                _quantidade = n
            }
        }
    }

    
})()
produto.quantidade = 5
produto.quantidade
console.log(produto.quantidade)