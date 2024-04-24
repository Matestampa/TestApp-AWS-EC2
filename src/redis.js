const {REDIS_CONN_VARS}=require("./config.js");
const {createClient}=require("redis");


//Iniciamos client de redis
let redisClient=createClient({
    url:`redis://${REDIS_CONN_VARS.host}:${REDIS_CONN_VARS.port}`
})

//Lo conectamos
redisClient.connect().catch(console.error)

module.exports={redisClient};