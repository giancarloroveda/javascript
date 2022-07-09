const nomes = ["Gian", "Maria", "Giovani", "Roger"]

let nomesPrimeiraLetra = nomes.reduce(function(lista, nomeAtual){
    let primeiraLetra = nomeAtual[0]

    if(lista[primeiraLetra]){
        lista[primeiraLetra]++
    } else {
        lista[primeiraLetra] = 1
    }
    return lista


}, {})
console.log(nomesPrimeiraLetra)