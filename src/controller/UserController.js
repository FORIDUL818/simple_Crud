const userModel = require("../model/UserModel/UserModel");

const Registration=async(req,res)=>{
    try {

        let {firstName,lastName,email,password,role}=req.body;
         const existUser=await userModel.findOne({email});

        if (existUser) {
            res.status(401).json({status:"email already in use "})
            return
        }

        let userData=await userModel.create({firstName,lastName,email,role, password});

        if (!userData) {
            res.status(401).json({status:"something went rong"})
        }
        else{
            res.status(200).json({status:"success",data:userData});
        }
         
         


    
        res.status(200).json("Registration successfully")
    } catch (error) {
        res.status(500).json({errMgs:error.message})
    }
}

module.exports={
    Registration
}