const {REDIS_CONN_VARS}=require("./config.js");
const {createClient}=require("redis");


//Iniciamos client de redis
let redisClient=createClient({
    host:REDIS_CONN_VARS.host,
    port:REDIS_CONN_VARS.port,
    password:REDIS_CONN_VARS.password,
})

//Lo conectamos
redisClient.connect().catch(console.error)


module.exports={redisClient};