import mongoose from "mongoose";


const Schema =mongoose.Schema;
const CreateSchema =new  Schema({
  
   
    email:{
        type:String,
        requir:true
    },
    password:{
        type:String,
        requir:true,
        minlength:6
    },
    dateTime :{
        type: Date, default:Date.now,
     

    },
})

export default mongoose.model('user',CreateSchema);