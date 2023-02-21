const mongoose = require("mongoose")


const orderSchema = mongoose.Schema({
    image:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    sizes:{type:String,required:true},
    category:{type:String,required:true},
    style:{type:String,required:true},
    color:{type:String,required:true},
    material:{type:String,required:true},
    fit:{type:String,required:true},
    occasion:{type:String,required:true},
    sleeves:{type:String,required:true},
    neck:{type:String,required:true},
    brand:{type:String,required:true},
    gender:{type:String,required:true},
    quantity:{type:Number,required:true},
    user:{type:String,required:true},
    status:{type:String,required:true},
    address:{type:String,required:true},
    pid:{type:String,required:true},
},{
    versionKey:false
})


const OrderModel = mongoose.model("/order",orderSchema)

module.exports={
    OrderModel
}