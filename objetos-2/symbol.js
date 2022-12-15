const NOME = Symbol()

const NOME2 = Symbol()

console.log(NOME)

console.log(NOME === NOME2)

let n = 0

const user = {
    ["teste" + (++n)]: 'teste' + n,
    ["teste" + (++n)]: 'teste' + n,
    ["teste" + (++n)]: 'teste' + n,
    [NOME]: 'com símbolo',
    'nome': 'com string',
    3: 'com número'
}

console.log(user)

let teste = Object.getOwnPropertySymbols(user)
user[NOME] = 'nome alterado'
console.log(user[NOME])
console.log(teste[0])
console.log(user[teste[0]])