const express = require("express")
const mongoose= require("mongoose")
const app= express()
mongoose.connect("mongodb+srv://suresh:suresh2003@cluster0.wj06ere.mongodb.net/?retryWrites=true&w=majority")
app.get('/GetMessage',(req,res)=>{
    res.send("Hello");
})
app.use(express.json())
app.use("/Users",require("./routes/first"));

app.listen(4000,()=>{
    console.log("data base connected");
})