const express=require("express");

const mongoDb=require("./config/Db");
mongoDb();
const app=express();
app.use(express.json());
app.use("/api/emp",require("./routes/employeeRoute"))






app.listen(5000,()=>{
    console.log("server running on port ");
})