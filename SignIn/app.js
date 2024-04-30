const express = require('express')
const app = express() 
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const cookieParser=require("cookie-parser")
const port = 3000
app.use(cookieParser())
app.get('/', (req, res) => {
    //Jwt
    let token = jwt.sign({email:"ronak1@gmail.com"},"secret")
    // console.log(token)
    res.cookie("token", token)
    res.send("Done ")
    // ----------------------------------------------------------------
    // res.cookie("name", "Ronak")
    
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("Ronak Sharma", salt, function(err, hash) {
    //         console.log(hash)
    //         res.send(hash)
    //     });
    // });

    // bcrypt.compare("Ronak Sharma", "$2b$10$N53g8t9UPtntI0wwvJW6oeeAP.ibK0gB.ru2iKmAgYnIJLLxOfo8q", function(err, result) {
    //     res.send(result)
    // });
})
app.get('/read', (req, res) => {

    // console.log(req.cookies);
    let token=jwt.verify(req.cookies.token,"secret");
    console.log(token)
    res.send('read' );
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))