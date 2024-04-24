/*const express=require("express");
const App=express();

const {redisClient}=require("./redis.js");


async function dale(){
    await redisClient.set("manu","gay");

    let value=await redisClient.get("manu")

    console.log(value);

    redisClient.quit();
}

dale();*/

const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    auth:{
        user:"smikeljordan@gmail.com",
        pass:"vpcu sbkf scrf yqoa"
    }
})

let messageData={
   from:{
    name:"IgUnfollowApp",
    address: "smikeljordan@gmail.com"
   },
   to:"paredpiso5@gmail.com",

   subject:"Prueba del mail en node",
   text:"hola desde nodeeeee",
}

async function dale(){
    await transporter.sendMail(messageData);
    console.log("Mail enviado");
}

dale();