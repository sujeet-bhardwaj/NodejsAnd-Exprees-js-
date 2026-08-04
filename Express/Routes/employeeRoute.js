const express=require("express")


const route=express.Router();
// post api 

route.post("/register",(req,res)=>{
      console.log(req.body);
      res.json(req.body);
})

route.get("/show",(req,res)=>{
  res.json("Show created successfully");
})

route.put("/update",(req,res)=>{
  res.json("update Created Succesfully");
})

route.patch("/minup",(req,res)=>{
  res.json("Minimalistic Update successfully");
})
route.delete("/del",(req,res)=>{
  res.json("Deleted Succesfylly");
})


module.exports=route;