const express=require("express");
const App=express();

const {redisClient}=require("./redis.js");


async function dale(){
    await redisClient.set("manu","gay");

    let value=await redisClient.get("manu")

    console.log(value);

    redisClient.quit();
}

dale();