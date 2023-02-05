const express = require("express")
const path = require("path")


const app = express()

// app.get("/", (req, res) => {
//     res.send("olá mundo")
// })

// o servidor estático para a rota "/" (raíz)
app.use(express.static(path.join(__dirname, "static")))

// o servidor estático para a rota "/images"
// app.use("/images", express.static("images")) // relativo ao local onde foi executado o servidor (comando do node)
app.use("/images", express.static(path.join(__dirname, "images")))

app.get("*", (req, res) => {
    if (req.accepts("html")) {
        res.status(404).sendFile(path.join(__dirname, "404.html"))
    }

})

app.listen(3000)