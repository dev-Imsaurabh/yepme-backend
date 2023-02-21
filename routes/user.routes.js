const express = require("express")

const userRouter = express.Router()
const bcrypt = require("bcrypt")
const { UserModel } = require("../models/UserModel")
const { userValidator } = require("../middlewares/userValidator")
const jwt = require("jsonwebtoken")
require("dotenv").config()




userRouter.post("/login",async(req,res)=>{


    let {email,password,phone}= req.body
    if(email&&password){
        let data = await UserModel.find({email})
        if(data.length>0){
            bcrypt.compare(password,data[0].password,(err,result)=>{
                if(err) res.send({
                    message:"Something went wrong",
                    status:0,
                    error:true
                })

                if(result){
                    let token = jwt.sign({userId:data[0]._id,role:data[0].role},process.env.SecretKey)
                    res.send({
                        message:"Login successful",
                        status:1,
                        token:token,
                        error:false
                    })

                }else{
                    res.send({
                        message:"Password is incorrect",
                        status:0,
                        error:true
                    })
                    

                }

            })



        }else{
            res.send({
                message:"User does not exist , Please Sign up",
                status:0,
                error:true
            })
            

        }


    }else{

        //for phone

    }




})






userRouter.use(userValidator)
userRouter.post("/register",async(req,res)=>{

    let {email,name,role,password,phone} = req.body

    if(email&&password){
        bcrypt.hash(password,5,async(err,hash)=>{

        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })

        try {
            let user = new UserModel({email,name,role,password:hash})
            await user.save()
            res.send({
                message:"User is regsitered",
                status:1,
                error:false
            })
        } catch (error) {
            res.send({
                message:"Somthing went wrong"+err,
                status:0,
                error:true
            })
            
        }

        })

    }else{

        try {
            let user = new UserModel({name,role,phone})
            await user.save()
            res.send({
                message:"User is regsitered",
                status:1,
                error:false
            })
        } catch (error) {
            res.send({
                message:"Somthing went wrong"+err,
                status:0,
                error:true
            })
            
        }

    }


})





module.exports={
    userRouter
}