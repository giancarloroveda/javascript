const fs = require("fs")
const dado = require("./dados/dados.json")

fs.readFile("./dados/dados.json", "UTF-8", (err, content) => {
    console.log(JSON.parse(content))
})

console.log(dado)