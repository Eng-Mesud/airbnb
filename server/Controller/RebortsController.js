import RentModal from "../Modal/RentModal.js";








export const getReborts =async (req, res, next) => {
    let getReborts;

    try {
        // getReborts = await RentModal.aggregate([{$lookup:{from:"property",localField:"_id",foreignField:"MemberModalsId",as:"name"}}])
        getReborts = await RentModal.find({})
        .populate({path:'properteisId', model:"Property"})
        .populate({path:'MemberModalsId', model:"Members"})
        
    }
    catch(err) {
        return res.status(404).json({message:"Eroro categry"})
    }

    if(!getReborts.length >0) {
     return res.status(404).json({message:"table not found"})
    }
    return res.status(200).send({
        "status_code":200,
        "message":"reborts Reading added success fuly",
        "Info_getReborts":getReborts
    })
}

