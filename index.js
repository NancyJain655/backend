const express = require("express")
const mongoose= require("mongoose")
//mongoose.connect("mongodb+srv://jainnancy655:fproject@cluster.wqsoj.mongodb.net/cluster").then(()=>{
  //  console.log("connected to mongodb");
//})
var app = express()
app.listen(3000,()=>{
    console.log("listening to port 3000")
    mongoose.connect("mongodb+srv://jainnancy655:fproject@cluster.wqsoj.mongodb.net/cluster").then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
});

})