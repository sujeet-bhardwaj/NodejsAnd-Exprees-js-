const express=require("express")
const app=express();
const MongoDB=require("./Config/db")
app.use(express.json())
MongoDB();
app.use("/api/user",require("./Routes/userRoute"))
app.use("/api/employee",require("./Routes/employeeRoute"))




app.listen(5000,()=>{
    console.log("Server Running on Port 5000")
})