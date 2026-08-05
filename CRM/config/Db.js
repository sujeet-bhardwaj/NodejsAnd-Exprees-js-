const mongoose=require("mongoose");

const mongoDb=()=>{
  mongoose.connect("mongodb://localhost:27017/CRM").then(()=>{
   console.log("database is connected")
  }).catch(()=>{
   console.log("database is not  connected")
  })
}
module.exports=mongoDb;