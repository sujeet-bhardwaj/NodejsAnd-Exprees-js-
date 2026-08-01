const http=require("http")
const fs =require("fs")
const server=http.createServer((req,res)=>{
//    res.end("response end");

if(req.url=="/"){
fs.readFile("./Project/index.html",(er,data)=>{
    if(er) throw er;
    res.end(data)
})
}

});  
// sever created 
// server running 
server.listen(5000,()=>{
    console.log("server running port number 4000")
});




