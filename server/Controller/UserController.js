import CreateUser from "../Modal/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const AddnewUser = async(req,res)=>{

  // user values
    const { email, password }= req.body;

    let exsiting ;
  
    // email feach or selectn
   

    try{
        exsiting =await CreateUser.findOne({email});
        // return res.status(404).json({message:"gmail already exists"})
    }catch(err){
        return console.log(err)
    }

    if(exsiting){
        return res.status(404).json({message:"gmail already exists"})
    }

    const hashedPassword =bcrypt.hashSync(password);
   const user = new CreateUser({ email,  password:hashedPassword})

   try {
      await  user.save()
   }
   catch(err){
    return console.log(err)
   }
   return res.status(200).json({user})

}






export const logOut = (req, res) => {
    res.clearCookie('token');
    return res.status(201).json("Suceessfully logged out")

}

export const getUser =async (req, res) => {
    let userReading;

    try {
        userReading = await CreateUser.find();
    }catch(err) {
        return console.log(err);
    }
    if(!userReading){
        return res.status(404).json({message:"user not found"});

    }
    return res.status(200).json({userReading})
}


export const deleteUsers = async(req,res) => {
  
    let userReading;
  // user values
     var {id} = req.body
     try {
        await CreateUser.deleteOne({_id:id})
       
    }catch(err) {
        return console.log(err);
    }  
    if(!userReading){
        return res.status(404).json({message:"Sucess fuly deleted"});

    }
    return res.status(200).json({userReading})
}





// cheack user 



export const verifyUser =(req,res,next)=>{
    const token =req.cookies.token;
    if(!token){
      return res.json("the token is missing")
    }else{
      jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
          if(err) {
              return res.status(404).json("the token is wrong")
          }else{
              req.gmail =decoded.gmail;
              req.firstName =decoded.firstName;
              req._id =decoded._id;
              next();
          }
      })
    }
  }
  
  
  
export const getLogin = async(req,res,next)=>{
     return res.json({email: req.email, _id:req._id,  password: req.password})
}
  


//user login cheack

export const login = async (req, res,next) => {
    const {email, password} = req.body;
    let exisisting;
    try {
        exisisting = await CreateUser.findOne({email});

    }catch (err) {
     return   console.log(err);
    }
   
    if(exisisting){
        bcrypt.compare(password,exisisting.password,(err,response)=>{
        if(response){
            const token =jwt.sign({email: exisisting.email, _id: exisisting._id}
                
                ,"jwt-secret-key",{expiresIn:'1d'})
                res.cookie('token',token)
                return res.status(200).json({message:"Login SuccessFull",exisisting})
                
            
                
        }else {
            return res.status(400).json({message:"Incorrect Paassword"});
        }
        })

    }else {
        return res.status(404).json({message:"couldnt find user by This gmail! "});
    }


    

}  



// export const updatedUsers = async(req,res)=>{

//     // user values
//       const {firstName, UserName, gmail, Password,id }= req.body;
  
//       let exsiting ;
    
//       // email feach or selectn
     
  
//       try{
//           exsiting =await CreateUser.findOne({gmail});
//           // return res.status(404).json({message:"gmail already exists"})
//       }catch(err){
//           return console.log(err)
//       }
  
//       if(exsiting){
//           return res.status(404).json({message:"gmail already exists"})
//       }
  
  
   
  
//      try {
//       await CreateUser.findByIdAndUpdate({_id:id,firstName, UserName, gmail, Password})
//      }
//      catch(err){
//       return console.log(err)
//      }
//      return res.status(200).json({user})
  
//   }