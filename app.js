import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import appUser from "./routers/user.js";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use(cookieParser());

appExpress.use("/campus", appUser)



let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, () => {
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})