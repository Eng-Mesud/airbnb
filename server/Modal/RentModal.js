import mongoose from "mongoose";


const Schema =mongoose.Schema;

const CreateRentSchema =new  Schema({
   

    MemberModalsId:{
        type: mongoose.Schema.Types.ObjectId,ref:'MemberModal'
    },

    properteisId:{
        type: mongoose.Schema.Types.ObjectId,ref:'property'
    },
    Price:{
        type:Number,
        required:true,

    },
    isActive:{
        type:String,
        required:true,

    },

    dateTime :{
        type: Date, default:Date.now,
     

    },

});

export default mongoose.model('products',CreateRentSchema);