import RentModal from "../Modal/RentModal.js";
import property from "../Modal/property.js";



export const AddRent = async(req,res)=>{
    const {MemberModalsId, properteisId,Price,isActive}=req.body;
//
    const Rents = new RentModal({MemberModalsId, properteisId,Price,isActive})
  
    try {
       await  Rents.save()
    }
    catch(err){
     return console.log(err)
    }
    return res.status(200).send({
        "status_code":200,
        "message":"rents added success fuly",
        "rents":Rents
    })

}




export const getProperteis =async (req, res, next) => {
    let Properteis;


    try {
        Properteis = await property.find()
    }
    catch(err) {
        return res.status(404).json({message:"Error  categry"})
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