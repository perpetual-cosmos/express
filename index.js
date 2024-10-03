const express = require("express");
const port=3000;
const app=express();

app.get("/",(req,res)=>{
    res.send('hello world')
})
app.get("/green",(req,res)=>{
    res.send('hello world green')
})
app.get("/green",(req,res)=>{
    res.send('hello world black')
})
app.get("/blue",(req,res)=>{
    res.send('hello world blue')
})
app.get("/red",(req,res)=>{
    res.send('hello world red')
})
app.listen(port,()=>{
    console.log('i am a backend developer');
});