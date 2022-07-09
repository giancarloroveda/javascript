// const nomes = ["Daniel", "Maria", "Joao"]
// const idades = [40, 28, 35]
// console.log(nomes[0], idades[0])

// const pessoa = new Object()
// pessoa.nome = "Daniel"
// pessoa.idade = 40
// console.log(pessoa)
// let prop = "nome"
// console.log(pessoa["nome"])
// console.log(pessoa[prop])
// console.log(pessoa.idade)
// console.log(pessoa["idade"])

const pessoa = {
    nome: "Gian",
    idade: 40
}
// console.log(pessoa)
// console.log(pessoa["nome"])
// console.log(pessoa.idade)
// console.log(pessoa["idade"])

for(let prop in pessoa){
    console.log(prop + ":", pessoa[prop])
}