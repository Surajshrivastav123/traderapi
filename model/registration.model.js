const {mongoose}=require('mongoose')
const registrationSchema=new mongoose.Schema({
    priceId:{
        type:String,
        requird:true
    },
    data:{
        type:String,
        requird:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports=mongoose.model("registration",registrationSchema)