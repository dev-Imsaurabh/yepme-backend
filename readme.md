# DATABASE SCHEMAS

# endpoints:-

GET/POST/PATCH/DELETE<br>

`/user`--->|POST<br>
|---> `/user/register`<br>
|---> `/user/login`<br>

|GET/POST<br>
`/products`--->|GET/PATCH/DELETE<br>
|---> `/products/:id`<br>

|GET/POST <br>  
`/cart`--->|GET/PATCH/DELETE <br>
|---> `/cart/:id`<br>

|GET/POST<br>
`/orders`--->|GET/PATCH/DELETE<br>
|---> `/orders/:id`<br>

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

# user schema

name:{type:String,required:true},<br>
email:{type:String},<br>
password:{type:String},<br>
role:{type:String,required:true},<br>
phone:title:{type:String},<br>

# Product Schema<br>

image: { type: String, required: true },
title: { type: String, required: true },
description: { type: String, required: true },
price: { type: Number, required: true },
sizes: { type: String, required: true },
category: { type: String },
style: { type: String, required: true },
color: { type: String, required: true },
material: { type: String},
fit: { type: String },
occasion: { type: String},
sleeves: { type: String },
neck: { type: String, },
brand: { type: String, required: true },
gender: { type: String, required: true },

# Cart Schema

_id:{type:String,required:true},<br>
image:{type:String,required:true},<br>
title:{type:String,required:true},<br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String,required:true},<br>
color:{type:String,required:true},<br>
material:{type:String,required:true},<br>
fit:{type:String,required:true},<br>
occasion:{type:String,required:true},<br>
sleeves:{type:String,required:true},<br>
neck:{type:String,required:true},<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true},<br>
quantity:{type:Number,required:true},<br>
user:{type:String,required:true},<br>
pid:{type:String,required:true},<br>

# Order Schema

image:{type:String,required:true},<br>
title:{type:String,required:true},<br>
description:{type:String,required:true},<br>
price:{type:Number,required:true},<br>
sizes:{type:String,required:true},<br>
category:{type:String,required:true},<br>
style:{type:String,required:true},<br>
color:{type:String,required:true},<br>
material:{type:String,required:true},<br>
fit:{type:String,required:true},<br>
occasion:{type:String,required:true},<br>
sleeves:{type:String,required:true},<br>
neck:{type:String,required:true},<br>
brand:{type:String,required:true},<br>
gender:{type:String,required:true},<br>
quantity:{type:Number,required:true},<br>
user:{type:String,required:true},<br>
status:{type:String,required:true},<br>
address:{type:String,required:true},<br>
pid:{type:String,required:true},<br>
