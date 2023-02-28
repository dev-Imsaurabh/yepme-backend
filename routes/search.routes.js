const express = require("express")
const { ProductModel } = require("../models/ProductModel")

const searchRouter = express.Router()


searchRouter.get("/",async(req,res)=>{

    let {q,page} = req.query
    try {

        let count = await ProductModel.countDocuments({
            $or: [
              { title: { $regex: new RegExp(`${q}`, `i`) } },
              { tags: { $regex: new RegExp(`${q}`, `i`) } }
            ]
          })
        
        let data = await ProductModel.find({
            $or: [
              { title: { $regex: new RegExp(`${q}`, `i`) } },
              { tags: { $regex: new RegExp(`${q}`, `i`) } }
            ]
          }).skip(page*12).limit(12)

          res.send({
            message:"Query successfull",
            status:1,
            data:data,
            count:count,
            error:false
          })
    } catch (error) {
        res.send({
            message:"Something went wrong"+error.message,
            status:0,
            error:true
          })
    }


})

module.exports={
    searchRouter
}