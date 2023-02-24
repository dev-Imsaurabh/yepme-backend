const express = require("express")
const { adminValidator } = require("../middlewares/adminValidator")
const { OrderModel } = require("../models/OrderModel")
const { ProductModel } = require("../models/ProductModel")

const statRouter = express.Router()
statRouter.use(adminValidator)
statRouter.get("/order",async(req,res)=>{

    let {request,adminId} = req.query

    try {
        let count;
        if(request=="totalorder"){
            count = await OrderModel.find(req.query).count()

        }else if(request=="pendingorder"){
            count = await OrderModel.find({adminId:adminId, $or: [ { status: req.query.status1 }, { status: req.query.status2 } ] })
        }
      



        res.send({
            message:"All Order stats",
            status:1,
            error:false,
            count:count
        })
    } catch (error) {
        res.send({
            message:"Something wend wrong: "+error.message,
            status:0,
            error:true
        })
        
    }

})

statRouter.get("/product",async(req,res)=>{

    try {

        let count = await ProductModel.find(req.query).count()
        res.send({
            message:"All Product stats",
            status:1,
            error:false,
            count:count
        })
    } catch (error) {
        res.send({
            message:"Something wend wrong: "+error.message,
            status:0,
            error:true
        })
        
    }

})

module.exports={
    statRouter
}