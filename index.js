const express = require("express")
const { connection } = require("./db")
const cors =require("cors")
const { userRouter } = require("./routes/user.routes")
const { productRouter } = require("./routes/product.routes")
const { cartRouter } = require("./routes/cart.routes")
const { orderRouter } = require("./routes/order.routes")
const { authenticator } = require("./middlewares/authenticator")
const { cartNorderValidator } = require("./middlewares/cart&orderValidator")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())
//user route
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use(authenticator)
app.use(cartNorderValidator)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)



app.get("/",(req,res)=>{
    res.send({
        message:"Api is running",
        status:0,
        error:false
    })
})

app.listen(process.env.PORT,async()=>{

    try {
        
        await connection
        console.log("Connected to DB")

    } catch (error) {
        console.log(error)
        
    }


    console.log("Seerver is running on port number",process.env.PORT)
})