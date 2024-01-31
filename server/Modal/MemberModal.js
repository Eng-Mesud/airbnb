import mongoose from "mongoose";

const SchemaMembers=mongoose.Schema;

const CreateMembers=new SchemaMembers({
    name:String,
    phone:Number,
    guarante:String,
    guarantePhone:Number,

})

export default mongoose.model('Members',CreateMembers)