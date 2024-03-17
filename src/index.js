const express=require("express");
const App=express();

const IP = require('ip');

const {APP_CONN_VARS}=require("./config.js");

App.use(express.json());


App.get("/",(req,res)=>{
    console.log("request recibida");
    console.log(req.headers["user-agent"]);
    console.log(req.headers["host"]);
    let publicIp=req.ip;
    let publicIpFor=req.header["x-forwarde-for"];


    res.send(`Your ip is ${publicIp} y te la comes toda`);
})


const PORT=APP_CONN_VARS.port;
console.log(PORT);

//compu ip 192.169.0.97
App.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`)
});
