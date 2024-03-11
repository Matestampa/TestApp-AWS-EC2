const express=require("express");
const App=express();

const IP = require('ip');


App.use(express.json());


App.get("/",(req,res)=>{
    let publicIp=req.ip;
    let publicIpFor=req.header["x-forwarde-for"];


    res.send(`Your ip is ${publicIp}`);
})


const PORT=3000;

App.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`)
});
