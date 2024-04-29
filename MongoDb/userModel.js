const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ronak19sharma06:Ronak1916@cluster1.capiey7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("user",userSchema)
