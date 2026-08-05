const express=require("express");
const Employee=require("../model/employeeModel");
const router=express.Router();
// login route
router.get("/show",async(req,res)=>{
    const data=await Employee.find();    
  res.json({
    "Document":data
  });
})


// register route 
router.post("/register",async(req,res)=>{
    // const email=req.body.email;
    const {email} =req.body;
    const check = await Employee.findOne({ email: email });
    console.log(check);
    if(check){
        res.json("email alredy exist");
    }
  const data=await Employee.create(req.body);
     res.json("Employee register succesfully");
})

// update route 
router.put("/update/:id",async(req,res)=>{
    const data=await   Employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
    console.log(data);
    res.json("Enmmployee Updated  succesfully");
})

// deleted route
router.delete("/delete/:id",async(req,res)=>{
    await Employee.findByIdAndDelete(req.params.id);
    res.json("Employee Deleted  Succesfully");
})

router.delete("/delete/all",async(req,res)=>{
    await Employee.deleteMany({});
    res.json("Employee all document  Succesfully");
})
module.exports=router;