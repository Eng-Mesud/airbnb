import property from "../Modal/property.js";




export const AddProperteis = async(req,res)=>{
    const {name,roms,adress,location}=req.body;

    const Properteis = new property({name,roms,adress,location})
  
    try {
       await  Properteis.save()
    }
    catch(err){
     return console.log(err)
    }
    return res.status(200).send({
        "status_code":200,
        "message":"product added success fuly",
        "Property":Properteis
    })

}




export const getProperteis =async (req, res, next) => {
    let Properteis;


    try {
        Properteis =await property.find()
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    if(!Properteis.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).send({
        "status_code":200,
        "message":"product added success fuly",
        "product_Properteis":Properteis
    })
}






export const SearcupdateProperty = async(req, res) =>{
    try{
     const  id = req.params.id;
 
     const searchId =await property.findById({_id:id});
     res.status(200).json({properteis: searchId});
    }
    catch(err) {
     res.status(404).json({message:err.message});
    }
 
 
 }

//updated


export const UpdatedProperty = async (req, res, next) => {
  
    

    try {
        // var {id} = req.params;
        const id = req.params.id;
         const cat = await property.findByIdAndUpdate({_id:id },{ roms: req.body.roms , adress:req.body.adress, location:req.body.location});
          res.status(200).json(cat)
     } catch(err) {
            res.status(200).json({msg: err.message});
           }
        }
    

export const getproperty_Option =async (req, res, next) => {
    let Optionlist_properteis;


    try {
        Optionlist_properteis =await property.find().select("roms")
    }
    catch(err) {
        return res.status(404).json({message:"Eroro optionproperty"})
    }

    if(!Optionlist_properteis.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).send({
        "status_code":200,
        "message":"option list  success fuly",
        "option_properteis":Optionlist_properteis
    })
}







export const deleteproperteis = async(req,res) => {
  try {
    const id =req.params.id;
    const prob = await property.findById(id)
    if(!prob) return res.status(404).json({message:"id is not exist"});
    const createProb = await property.findOneAndDelete({_id:id})
    res.status(201).json({message:"deleted success"});
  } catch (error) {
    console.log(error);
    res.status(403).json({message:"unknown error"});
  }
   
}

















export const getCount_Property=async (req, res, next) => {
  


    try {
       const  COUNTProperteis =await property.find().count();
        return res.status(200).json({COUNTProperteis})
    }
    catch(err) {
        return res.status(404).json({message:"Eroro Products"})
    }

 
 
}




