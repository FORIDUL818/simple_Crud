const express=require('express');
const cors=require('cors')
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
const ConnectDB = require('./src/db/db');
const router = require('./src/routes/userRotes');
dotenv.config();

const app=express();

// middlware 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// middlware 

// database connection
ConnectDB()
.then(()=>console.log("database connected"))
.catch((error)=>console.error(error));
// database connection

// routes
app.use("/user",router);
// routes

app.all("*splat",async(req,res)=>{
   res.status(404).json({status:"Not Found"})
})

module.exports=app;