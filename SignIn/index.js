const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const cookieParser = require('cookie-parser');
app.use(express.json())
app.use(express.urlencoded({extended: true})) 
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs")
app.use(cookieParser());
app.get('/', (req, res) =>{ 
    res.render('index')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))