const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {

    switch (req.url) {
        case "/":
        case "/index.html":
            fs.readFile("./index.html", "UTF-8", (err, html) => {
                if (err) {
                    res.writeHead(500)
                    res.end("<h1>Deu erro</h1>")
                }

                res.writeHead(200, { "Content-Type": "text/html" })

                const convertToTemplate = new Function("return `" + html + "`")

                res.end(convertToTemplate.call(req))
            })
            break
        case "/estilo/estilo.css":
            res.writeHead(200, { "Content-Type": "text/css" })
            res.end("body {color: red}")
            break
        case "/img/logo.png":
            res.writeHead(200, { "Content-Type": "image/png" })
            fs.createReadStream("./img/logo.png").pipe(res)
            break
        default:
            res.writeHead(404, { "Content-Type": "text/html" })
            res.end("<h1>404: not found</h1>")
    }

}).listen(3000)


console.log("servidor rodando a porta 3000 \n http://localhost:3000")