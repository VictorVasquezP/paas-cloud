const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.port || 3000;

app.get("/",(req,res) =>{
    res.send("Prueba - paas");
});

app.get("/cloud",(req,res) =>{
    res.send(importData);
});

app.listen(port, () =>{
    console.log('app escuchando desde el puerto http://localhost:'+port);
});