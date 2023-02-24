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
            count = await OrderModel.countDocuments({adminId:adminId})

        }else if(request=="pendingorder"){
            count = await OrderModel.countDocuments({adminId:adminId, $or: [ { status: req.query.status1 }, { status: req.query.status2 } ] })
        }else if(request=="totalearning"){
           count = await OrderModel.aggregate([
            {
               $match: {
                  adminId: { $eq: adminId }
               }
            },
            {
               $group: {
                  _id: null,
                  total: { $sum: "$totalDiscountPrice" }
               }
            }
         ])
         
              

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
    
    let {request,adminId} = req.query


    try {
        let count;
        if(request=="totalproduct"){
           count = await ProductModel.countDocuments({adminId:adminId})

        }

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