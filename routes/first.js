const express=require("express")

const routers=express.Router()
const firsts=require("../model")

routers.post("/CreateUser",async(req,res)=>{
    try{
        const data=await firsts.create({
        //   name:req.body.name
        ...req.body
        })
        console.log(data);
        res.status(200).json({message:"Success"})
    }
    catch(err){
        res.status(400).json({message:"Failure"})
    }
})

routers.get("/GetUser",async(req,res)=>{
    try{
        const data=await firsts.find()
        res.status(200).json({message:"Success"})
        console.log(data);
    }
    catch(err){
        res.status(400).json({message:"failure"})
    }


 })

 routers.get("/GetUser/:_id",async(req,res)=>{
    try{
        const data=await firsts.findOne({_id:req.params._id})
        res.status(200).json(data)
    }
    catch(err){
        res.status(400).json({message:"User Get Failure"})
    }

 })
 routers.delete("/DeleteUser/:_id",async(req,res)=>{
    try{
    const data=await firsts.deleteOne({_id:req.params._id})
    res.status(200).json({message:"delete user sucessfull"})
    console.log(data)
    }
    catch(err){
        res.status(400).json({message:"delete user failure"})
    }
 })
 routers.put("/UpdateUser/:_id",async(req,res)=>{
    try{
        const data=await firsts.updateOne({_id:req.params._id},{$set:req.body})
        res.status(200).json({message: "update success"})
        console.log(data)
    }
    catch(err){
        res.status(400).json({message:"update failure"})
    }

 })

module.exports=routers