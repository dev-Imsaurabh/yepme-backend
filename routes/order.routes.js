const express = require("express")
const jwt = require("jsonwebtoken")
const { adminValidator } = require("../middlewares/adminValidator")
const { OrderModel } = require("../models/OrderModel")

const orderRouter = express.Router()


orderRouter.get("/",(req,res)=>{
    let token = req.headers.authorization
    jwt.verify(token, process.env.SecretKey, async function(err, decoded) {
        if(err) res.send({
            message:"Something went wrong: "+err,
            status:0,
            error:true
        })
        let {userId:user} = decoded
        try {
            let data = await OrderModel.find({user})
            res.send({
                message:"All order data",
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


orderRouter.post("/",async(req,res)=>{
   
    try {
        
        req.body.forEach(el => {
            el.status="ordered"
            el.orderDate=String(Date.now())
        });
        
        await OrderModel.insertMany(req.body)
        res.send({
            message:"Item added in order",
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

orderRouter.use(adminValidator)       

orderRouter.patch("/:id",async(req,res)=>{
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
            await OrderModel.updateOne({_id,user},req.body)
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



module.exports={
    orderRouter
}