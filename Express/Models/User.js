const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
 name:{
    type:String,
 }
,
city:{
    type:String,
 }


})

module.exports=mongoose.model("user",userSchema)