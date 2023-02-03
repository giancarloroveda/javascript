const http = require("http")
const fs = require("fs")
const path = require("path")

const extensionsMIMETypes = {
    image: {
        ".jpg": "jpg",
        ".jpeg": "jpeg",
        ".png": "png"
    },
    text: {
        ".html": "html",
        ".css": "css"
    },
    application: {
        ".js": "javascript"
    }
}

const getStaticFile = (_path, MIMEType, res) => {

    if (!fs.existsSync(_path)) {
        res.writeHead(404, { "Content-Type": "text/html" })
        if (MIMEType === "text/html") {
            _path = path.join(__dirname, "static", "404.html")
        } else {
            return res.end()
        }
    } else {
        res.writeHead(200, { "Content-Type": MIMEType })
    }

    fs.createReadStream(_path).pipe(res).on("error", () => {
        res.writeHead(500)
        res.end()
    }).on("finish", () => {
        console.log("finish")
    })
}

const serverStaticFile = (url, res) => {
    const _path = path.join(__dirname, "static", url)
    const extension = path.extname(url)

    let MIMEType;
    for (prop in extensionsMIMETypes) {
        if (extensionsMIMETypes[prop][extension]) {
            MIMEType = `${prop}/${extensionsMIMETypes[prop][extension]}`
        }
    }
    getStaticFile(_path, MIMEType, res)
}

http.createServer((req, res) => {
    let url = req.url
    switch (url) {
        case "/":
            serverStaticFile("/index.html", res)
            break
        case "/login":
            if (req.method.toLowerCase() === "post") {
                let body = ""
                req.on("data", (d) => body += d)
                req.on("end", () => console.log(body))
            }
            getStaticFile(path.join(__dirname, "login.html"), "text/html", res)
            break
        default:
            serverStaticFile(url, res)
    }
}).listen(3000)