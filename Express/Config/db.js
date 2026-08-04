const mongoose=require("mongoose");
const mongoDB=()=>{
  mongoose.connect("mongodb://localhost:27017/crud").then(()=>{
    console.log("Database Is connected")
  }).catch(()=>{
    console.log("database is Not corrected")
  })

}

module.exports=mongoDB;