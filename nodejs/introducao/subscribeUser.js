const fs = require("fs")
const { off } = require("process")
const dados = require("./dados/dados.json")
const { getByFlag } = require("./getByFlag")

const dado = ["firstname", "lastname"].reduce((current, next) => {
    current[next] = getByFlag(`--${next}`)
    return current
}, {})

dados.push(dado)

fs.writeFile("./dados/dados.json", JSON.stringify(dados), err => {
    if (err) throw err
})

// const subscribeUser = () => {
//     const firstName = getByFlag("--firstname")
//     const lastName = getByFlag("--lastname")

//     if (!firstName || !lastName) return
//     dados.push({ name: firstName, lastname: lastName })
//     fs.writeFile("./dados/dados.json", JSON.stringify(dados), err => {
//         if (err) throw err
//     })
// }

// subscribeUser()