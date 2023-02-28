const express = require("express")
const { ProductModel } = require("../models/ProductModel")

const searchRouter = express.Router()


searchRouter.get("/",async(req,res)=>{

    let {q} = req.query
    try {
        
        let data = await ProductModel.find({
            $or: [
              { title: { $regex: new RegExp(`${q}`, `i`) } },
              { tags: { $regex: new RegExp(`${q}`, `i`) } }
            ]
          })

          res.send({
            message:"Query successfull",
            status:1,
            data:data,
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