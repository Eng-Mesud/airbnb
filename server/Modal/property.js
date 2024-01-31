import mongoose from "mongoose";

const SchemaProperty=mongoose.Schema;

const CreateProperty=new SchemaProperty({
    name:String,
    roms:String,
    adress:String,
    location:String,

})

export default mongoose.model('Property',CreateProperty)