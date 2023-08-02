const express = require("express")
const path = require("path")
const port = process.env.PORT || 4000

const app = express()

app.use(express.static(__dirname + '/front_end'))

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/front_end", "index.html"))
})

app.get("/nosotros", (req, res) => {
    res.sendFile(path.join(__dirname, "/front_end", "nosotros.html"))
})

app.get("/catalogo", (req, res) => {
    res.sendFile(path.join(__dirname, "/front_end", "catalogo.html"))
})

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "/front_end", "contacto.html"))
})
