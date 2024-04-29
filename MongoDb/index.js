const express = require('express')
const app = express()
const port = 3000
const userModel = require("./userModel")
app.get('/', (req, res) => res.send('Hello Ronak World!'))

app.get("/create", async (req, res) => {
    const user = await userModel.create({
        name: "Ronak",
        email: "rsvk12@gmail.com",
        username: "ronak_19",
    })
    res.send(user);
})
app.get("/update", async (req, res) => {
    const user = await userModel.findOneAndUpdate({
        name: "Ronak",
    }, { email: "12@gmail.com" }, { new: true })
    res.send(user);
})
app.get("/read",async (req,res)=>{
   let users=await userModel.find()
   res.send(users)
})
app.get("/delete",async (req,res)=>{
   let users=await userModel.findOneAndDelete({email:"12@gmail.com"})
   res.send(users)
})
app.listen(port, () =>
    console.log(`Example app listening on port ${port} !`
    ))