const express=require("express");
const { test } = require("../controller/UserController");
const router=express.Router();

router.get("/test",test);

module.exports=router;