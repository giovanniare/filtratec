const express = require("express")
const port = process.env.PORT || 4000

const app = express()

app.use(express.static(__dirname + '/front_end'))

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
})

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "index.html"))
})