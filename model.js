const mongoose=require("mongoose")

let users=mongoose.Schema({
    name:{
        type: "string"
    }
})
module.exports=mongoose.model("Users",users);