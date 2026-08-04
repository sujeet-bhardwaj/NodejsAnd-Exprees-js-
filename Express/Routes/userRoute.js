const express=require("express")


const routes=express.Router();
// post api 
const user=require("../Models/User")
routes.post("/register",async(req,res)=>{
  const data=await new user(req.body);
  data.save()
  res.json("succesfully registerd")
})

routes.get("/show",(req,res)=>{
  res.json("Show created successfully");
})

routes.put("/update",(req,res)=>{
  res.json("update Created Succesfully");
})

routes.patch("/minup",(req,res)=>{
  res.json("Minimalistic Update successfully");
})
routes.delete("/del",(req,res)=>{
  res.json("Deleted Succesfylly");
})


module.exports=routes;