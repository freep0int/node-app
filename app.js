const express = require('express')
const server = express();


server.get("/", (req,res) =>{
    res.send("hello :^)")
})

server.listen(5000, () =>{
    console.log("server running...")
})