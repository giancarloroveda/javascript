const pessoas = [ {
    nome: "Joao",
    idade: 16
}, {
    nome: "Maria",
    idade: 35
}, {
    nome: "Robso",
    idade: 24
}, {
    nome: "Gian",
    idade: 17
}]

// let prop = "nome"

// console.log(pessoas[0][prop])
// console.log(pessoas[0]["nome"])
// console.log(pessoas[0].nome)



for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos!`)
}
