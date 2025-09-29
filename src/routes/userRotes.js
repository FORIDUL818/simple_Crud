const express=require("express");
const { test } = require("../controller/testController");
const { Registration } = require("../controller/UserController");
const router=express.Router();

router.get("/test",test);
router.post("/register",Registration);

module.exports=router;