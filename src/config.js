const dotenv=require("dotenv");
const {join}=require("path");


let env_absPath=join(__dirname,`../envs/.env.${process.env.APP_ENV}`)

dotenv.config({path:env_absPath});

const APP_CONN_VARS={
   port:process.env.PORT
}


const REDIS_CONN_VARS={
   host:process.env.REDIS_HOST,
   port:process.env.REDIS_PORT,
   password:process.env.REDIS_PASSWORD,
};


module.exports={APP_CONN_VARS,REDIS_CONN_VARS};