const http = require("http")
const fs = require("fs")

const getStaticFile = (url, type, res) => {

    if (!fs.existsSync(url)) {
        fs.createReadStream("./static/404.html").on("")
    }

    const readStream = fs.createReadStream(url)
    let data = ""
    readStream.on("data", (err, response) => {
        if (err) throw err
        data += response
    })
    readStream.on("end", () => {

    })
}

const serverStaticFile = (url, res) => {
    const regexType = /\w+$/
    const type = url.match(regexType)[0]
    const file = getStaticFile(`./static/${url}`, res)
}

http.createServer((req, res) => {

    serverStaticFile(req, res)

})