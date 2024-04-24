const express = require('express')
const app = express()
const path = require('path')
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render("index", { name: "Ronak" , array: [1, 2, 3, 4, 5, 6, 3]}
       )
})
app.get("/profile/:username", (req, res) => {
    res.end("Kaisa he bhai " + req.params.username)
})
app.listen(3000, (req, res) => {
    console.log("listening on 3000 port");
});