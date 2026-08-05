const mongoose=require("mongoose");

const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    
    salary:{
        type:Number,
        required:true
    },
    
    mobile:{
        type:Number,
        required:true
    },
    designition:{
        type:String,
        required:true
    },
    
    address:{
        type:String,
        required:true
    },
     gender:{
        type:String,
        enum:["male","female","others"],
    }                 
})
module.exports=mongoose.model("Employee",employeeSchema)
