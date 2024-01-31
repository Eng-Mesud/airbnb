import MemberModal from "../Modal/MemberModal.js";




export const AddMembers = async(req,res)=>{
    const {name,phone,guarante,guarantePhone}=req.body;

    const Members = new MemberModal({name,phone,guarante,guarantePhone})
  
    try {
       await  Members.save()
    }
    catch(err){
     return console.log(err)
    }
    return res.status(200).send({
        "status_code":200,
        "message":"Member added success fuly",
        "members":Members
    })

}







export const deleteMembers = async(req,res) => {
    try {
      const id =req.params.id;
      const prob = await MemberModal.findById(id)
      if(!prob) return res.status(404).json({message:"id is not exist"});
      const createMem = await MemberModal.findOneAndDelete({_id:id})
      res.status(201).json({message:"deleted success"});
    } catch (error) {
      console.log(error);
      res.status(403).json({message:"unknown error"});
    }
     
  }

export const SearcupdateMembers = async(req, res) =>{
    try{
     const  id = req.params.id;
 
     const searchId =await MemberModal.findById({_id:id});
     res.status(200).json({Members : searchId});
    }
    catch(err) {
     res.status(404).json({message:err.message});
    }
 
 
 }

//updated


export const UpdatedMembers  = async (req, res, next) => {
  
    

    try {
        // var {id} = req.params;
        const id = req.params.id;
         const cat = await MemberModal.findByIdAndUpdate({_id:id },{ name: req.body.name , phone:req.body.phone, guarante:req.body.guarante,guarantePhone:req.body.guarantePhone});
          res.status(200).json(cat)
     } catch(err) {
            res.status(200).json({msg: err.message});
           }
 }
    



export const getMembers =async (req, res, next) => {
    let Members;


    try {
        Members =await MemberModal.find()
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    if(!Members.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).send({
        "status_code":200,
        "message":"product added success fuly",
        "product_Members":Members
    })
}








//list option name




export const getMembers_Option =async (req, res, next) => {
    let Optionlist_Members;


    try {
        Optionlist_Members =await MemberModal.find().select("name")
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    if(!Optionlist_Members.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).send({
        "status_code":200,
        "message":"option list  success fuly",
        "option_Members":Optionlist_Members
    })
}

