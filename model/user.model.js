const {mongoose}=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        requird:true
    },
    password:{
        type:String,
        requird:true
    }  
})
module.exports=mongoose.model("user",userSchema)