const mongoose =require("mongoose")

const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String
        } ,
        isCompleted:{
            type:Boolean,
            required:true
        }
    }
)

module.exports=mongoose.model("Todo",todoSchema);