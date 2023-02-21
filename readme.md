# DATABASE SCHEMAS

# endpoints:-

 # /user

```
|GET
`/user`-------> |POST
                |-----> `/user/register`  //for registering user

                   {
                        name:"Saurabh",
                        email:"sau4478@gmail.com",
                        password:"12234",
                        phone:37949740 (optional)
                    }
-------------------------------------------------------------------------------------------------------
                |POST
                |-----> `/user/login`

                   {
                       
                        email:"sau4478@gmail.com",
                        password:"12234",
                       
                    }

-------------------------------------------------------------------------------------------------------

                |GET
                |---> `/user/admin` 

                  headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

-------------------------------------------------------------------------------------------------------

                |PATCH
                |------> `/user/superadmin/:id`



                  headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

```   

 -----------------------------------------------------------------------------------------------------

 # /product             

```
|GET/POST<br>
`/product`---> |GET/PATCH/DELETE<br>
                |-----------------> `/product/:id`<br>

            |GET -----> /product?category=kurta

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
            }

-------------------------------------------------------------------------------------------------------            

            |POST --> /product

                {

                    image: { type: String, required: true },<br>
                    title: { type: String, required: true },<br>
                    description: { type: String, required: true },<br>
                    price: { type: Number, required: true },<br>
                    originalPrice: { type: Number, required: true },<br>
                    sizes: { type: String, required: true },<br>
                    category: { type: String ,required:true },<br>
                    style: { type: String, required: true },<br>
                    color: { type: String, required: true },<br>
                    material: { type: String},<br>
                    fit: { type: String },<br>
                    occasion: { type: String},<br>
                    sleeves: { type: String },<br>
                    neck: { type: String, },<br>
                    brand: { type: String, required: true },<br>
                    gender: { type: String, required: true },<br>
                    delivery:{ type: Number, required: true },<br>
                    tags:{type: String}<br>

                }

                 headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                    }

-------------------------------------------------------------------------------------------------------

            |PATCH -----> /product/:id
                {
                    key:"value"
                }

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }

------------------------------------------------------------------------------------------------------

            |DELETE -----> /product/:id

               headers:{

                    Authorization:`kjxbjbjxsjbxsbdbxbsaodboaodsbdoubdba`
                        
                }

```

|GET/POST <br>  
`/cart`-------> |PATCH/DELETE <br>
                |-------------> `/cart/:id`<br>

|GET/POST<br>
`/order`-----> |PATCH<br>
                |------> `/orders/:id`<br>

|GET<br>
`/search`<br>

# Middlewares

Authencator--> verify user

# Querys:-

`/search?q=`<br>
`/products?`<size, price, category, style, color, material, fir, occasion, sleeves, neck, brand, gender> =<br>

# user keys

name <br>
email<br>
password<br>
role<br>
phone<br>

# Product keys

image<br>
title<br>
description<br>
price<br>
originalPrice<br>
sizes<br>
category<br>
style<br>
color<br>
material<br>
fit<br>
occasion<br>
sleeves<br>
neck<br>
brand<br>
gender<br>
delivery<br>
adminId<br>
tags<br>

# user schema for Registering

name:{type:String,required:true},<br>
email:{type:String},<br>
password:{type:String},<br>
role:{type:String,required:true},<br> (Automatic)
phone:title:{type:String},<br>

#


 # Product Schema
_id:{type:String,required:true},<br>(Automatic)
image: { type: String, required: true },<br>
title: { type: String, required: true },<br>
description: { type: String, required: true },<br>
price: { type: Number, required: true },<br>
originalPrice: { type: Number, required: true },<br>
sizes: { type: String, required: true },<br>
category: { type: String ,required:true },<br>
style: { type: String, required: true },<br>
color: { type: String, required: true },<br>
material: { type: String},<br>
fit: { type: String },<br>
occasion: { type: String},<br>
sleeves: { type: String },<br>
neck: { type: String, },<br>
brand: { type: String, required: true },<br>
gender: { type: String, required: true },<br>
delivery:{ type: Number, required: true },<br>
adminId:{type: String, required: true},<br> (Automatic)
tags:{type: String}<br>


 # Cart Schema
_id:{type:String,required:true}, <br> (Automatic)
image:{type:String,required:true}, <br>
title:{type:String,required:true}, <br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
originalPrice: { type: Number, required: true },<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String},<br>
color:{type:String,required:true},<br>
material: { type: String},<br>
fit: { type: String },<br>
occasion: { type: String},<br>
sleeves: { type: String },<br>
neck: { type: String, },<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true},<br>
delivery:{ type: Number, required: true },<br>
adminId:{type: String, required: true},<br>
quantity:{type:Number,required:true},<br> (Add manually)
user:{type:String,required:true},<br>
pid:{type:String,required:true},<br>
tags:{type: String}<br>



 # Order Schema
image:{type:String,required:true},<br>
title:{type:String,required:true},<br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
originalPrice: { type: Number, required: true },<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String},<br>
color:{type:String,required:true},<br>
material: { type: String},<br>
fit: { type: String },<br>
occasion: { type: String},<br>
sleeves: { type: String },<br>
neck: { type: String, },<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true},<br>
quantity:{type:Number,required:true},<br>
user:{type:String,required:true},<br>
status:{type:String,required:true},<br> (Automatic)
address:{type:String,required:true},<br>
orderDate:{type:String,required:true},<br> (Automatic)
pid:{type:String,required:true},<br>
delivery:{ type: Number, required: true },<br>
adminId:{type: String, required: true},<br>
tags:{type: String}<br>
