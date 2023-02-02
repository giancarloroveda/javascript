const fs = require("fs")
const https = require("https")

const options = {
    hostname: "serfrontend.com",
    port: 443,
    path: "/cursos/index.html",
    method: "GET"
}

const request = https.request(options, (res) => {

    res.setEncoding("UTF-8")

    // res.on("data", (data) => {
    //     console.log(data.length)
    //     html += data
    // })

    res.on("end", () => {
        // console.log(typeof html)
        // fs.createWriteStream("./index.html", "UTF-8").write(html)
        console.log("index.html lido")
    })
    const writeStream = fs.createWriteStream("./index.html", "UTF-8")

    writeStream.on("finish", () => {
        console.log("index.html baixado")
    })

    res.pipe(writeStream).on("finish", () => {
        console.log("index.html baixado dentro do pipe")
    })

})

request.end()