import mongoose from "mongoose";

const userSchema = new mongoose.Schema({//this is used to create a schema for the user
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["student","teacher","admin"],//enum is used to restrict the values that can be stored in a field
        required:true
    },
   coursesEnrolled:[{
       type:mongoose.Schema.Types.ObjectId,//this is used to store the id of the course
       ref:"Course"
   }]
},
{
    timestamps:true
});

const User =mongoose.model("User",userSchema);
export default User;