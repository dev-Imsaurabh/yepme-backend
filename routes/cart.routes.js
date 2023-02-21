const express = require("express")
const jwt = require("jsonwebtoken")
const { CartModel } = require("../models/CartModel")
const cartRouter = express.Router()



cartRouter.get("/",(req,res)=>{
    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        let {userId:user} = decoded
        try {
            let data = await CartModel.find({user})
            res.send({
                message:"All cart data",
                status:1,
                data:data,
                error:false
            })
        } catch (error) {
            
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })

        }
     
      });



})




cartRouter.post("/",async(req,res)=>{
   
        try {
            let cart = new CartModel(req.body)
            await cart.save()
            res.send({
                message:"Item added in cart",
                status:1,
                error:false
            })
        } catch (error) {
            
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })

        }
     
      });

      

cartRouter.patch("/:id",async(req,res)=>{
    let {id:_id} = req.params
    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async(err,decoded)=>{
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        try {
            let {userId:user}=decoded
            await CartModel.updateOne({_id,user},req.body)
            res.send({
                message:"Item updated",
                status:1,
                error:false
            })
    
        } catch (error) {
    
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })
            
        }

    })

    
   
   
  });


  
cartRouter.delete("/:id",async(req,res)=>{
    let {id:_id} = req.params
    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async(err,decoded)=>{
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        try {
            let {userId:user}=decoded
            await CartModel.deleteOne({_id,user})
            res.send({
                message:"Item deleted",
                status:1,
                error:false
            })
    
        } catch (error) {
    
            res.send({
                message:"Something went wrong: "+error.message,
                status:0,
                error:true
            })
            
        }

    })

  });



module.exports={
    cartRouter
}