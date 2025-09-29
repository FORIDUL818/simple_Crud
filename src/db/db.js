const mongoose=require("mongoose");

const ConnectDB=async () => {
    return await mongoose.connect(process.env.MONGO_URI)
    
}

module.exports=ConnectDB;