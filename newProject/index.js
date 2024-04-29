const express = require('express')
const app = express()
const port = 3000
const path = require('path')
console.log(path.join(__dirname,"public"));
app.set("view engine","ejs")
app.set(express.static(path.join(__dirname,"public")))
app.set(express.json())
app.set(express.urlencoded({extended: true}))
app.get('/', (req, res) => res.render('index'))
app.listen(port, () => console.log(`Example app listening on port ${port} !`))