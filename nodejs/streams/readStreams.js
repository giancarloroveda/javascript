const fs = require("fs")

fs.readFile("./swapi.json", "UTF-8", (err, data) => {
    if (err) throw err

    const results = JSON.parse(data).results[0].name
    console.log(results)
})

const readStream = fs.createReadStream("./swapi.json", "UTF-8")

// readStream.once("data", data => {
//     console.log("on data")
//     console.log(data)
// })

let json = ""

readStream.on("data", data => {
    console.log("on data")
    console.log(data.length)
    json += data
})

readStream.on("end", () => {
    console.log("json")
    console.log(json.length)
})