const dotenv=require("dotenv");
const {join}=require("path");


let env_absPath=join(__dirname,`../envs/.env.${process.env.APP_ENV}`)

dotenv.config({path:env_absPath});

const APP_CONN_VARS={
   port:process.env.PORT
}


module.exports={APP_CONN_VARS};