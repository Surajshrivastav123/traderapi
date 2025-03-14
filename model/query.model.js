const {mongoose}=require('mongoose')
const querySchema=new mongoose.Schema({
    name:{
        type:String,
        requird:true
    },
    Designation:{
        type:String,
        requird:true
    },
    companyName:{
        type:String,
        requird:true
    },
    Contact:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true
    },
    website:{
        type:String,
        requird:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports=mongoose.model("query",querySchema)