import e from "express";
import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    },
    replies:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }]
},
{
    timestamps:true
});

const Discussion = mongoose.model("Discussion",discussionSchema);
export default Discussion;