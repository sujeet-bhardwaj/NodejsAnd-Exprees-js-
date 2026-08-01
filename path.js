const p=require("path");
// console.log(p);
const a=p.join("index","firefox");
// console.log(a); 

console.log(p.basename(__filename));
// base name gives file name with extention 
// console.log(p.delimiter)

console.log(__filename)
console.log(p.parse(__filename));