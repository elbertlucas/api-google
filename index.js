const express = require("express")
const router = require('./routes.js')

const app = express()
app.use(express.json())
app.use('/', router)

app.listen(3001, () => console.log("Rodando na porta 3001"))