const mongoose= require("mongoose")
const validator=require("validator")

var userSchema=new mongoose.Schema({
    name:{type:'string',required:true},
    email:{
        type:"string",
        required:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    mobile:{type:'string',default:'0000-00-000'},
    password:{type:'string',required:true},
    role:{type:'string',default:"student"},
    createdAt:{type:Date,default:Date.now}

    })

// var foodSchema=new  mongoose.Schema({
//     name:{type:"string",required:true},
//     price:{type:Number},
//     description:{type:'string'}
// })

// const FoodDetails=mongoose.model('food',foodSchema)
const UserDetails= mongoose.model("users",userSchema)
module.exports={UserDetails}