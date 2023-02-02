const fs = require("fs")

const md = `
# Este é um conteúdo criado dinamicamente

* item 1
* item 2
`

fs.writeFile("./files/teste.md", md.trim(), err => {
    if (err) {
        throw err
    }
    console.log("Arquivo salvo")
})

const users = [{
    name: "giancarlo",
    lastname: "roveda"
}]

const createDados = () => {
    fs.writeFile("./dados/dados.json", JSON.stringify(users), err => {
        if (err) {
            throw err
        }
        console.log("JSON salvo")
    })
}

if (!fs.existsSync("dados")) {
    fs.mkdir("dados", err => {
        if (err) throw err
        createDados()
    })
} else {
    createDados()
}