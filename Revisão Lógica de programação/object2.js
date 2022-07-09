const pessoa = {
    nome: "Gian",
    idade: 17,
    sexo: "masculino",
    email: "eu@server.com"
}

console.log(pessoa)

 for(let prop in pessoa){
     console.log(prop + ": " + pessoa[prop])
}
     