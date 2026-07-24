const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register first time

const register = async ({username, email, password}) =>{
    const adminCount = await Admin.countDocuments();

    if(adminCount>0){
        return{
            status: 403,
            success: false,
            message: "Admin already exists. Only one admin can register,",
        };
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const admin = await Admin.create({
        username,
        email,
        password:hashedPassword
    });

    return{
        status: 201,
        success: true,
        message: "Admin registered successfully.",
        data: {
            id: admin._id,
            username: admin.username,
            email: admin.email 
        }
    };
};

// login for admin

const login = async ({email, password}) =>{
    const admin = await Admin.findOne({email});

    if(!admin){
        return{
            status: 401,
            success: false,
            message: "Incorrect email or password."
        };
    }

    const isMatch = await bcrypt.compare(password,admin.password);

    if(!isMatch){
        return{
            status: 401,
            success: false,
            message: "Incorrect email or password."
        }
    };

    const token = jwt.sign(
        {
            id: admin._id,
            email: admin.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    return {
    status: 200,
    success: true,
    message: "Login successful.",
    token,
  };
}


module.exports = {register,login};