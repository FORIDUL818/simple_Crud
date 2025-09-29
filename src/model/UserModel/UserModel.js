const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
// user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: (value) => {
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value); // must return
            },
            message: "Invalid email format"
        }
    },
    password:{
        type:String,
        required:true,
        set:(value)=>{
            return bcrypt.hashSync(value,bcrypt.genSaltSync(10));
        }
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user", "moderator"], // only allow these
        default: "user"
    },
    profile: {
        type: String, 
        default: ""
    },
    createDate: {
        type: Date,
        default: Date.now // pass reference, not function call
    }
}, { versionKey: false });

// user model
const userModel = mongoose.model("users", userSchema);

// export module
module.exports = userModel;
