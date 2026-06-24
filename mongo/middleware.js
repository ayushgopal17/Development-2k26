
const jwt=require("jsonwebtoken")

function authMiddleware(req,res,next){
    const token=req.headers.token;
   const decoded=jwt.verify(token,"Ayush123");

   if(decoded.userId){
   
    req.userId=decoded.userId;
    next();
   }
   else{
    req.json({
        message: "Invalid token"
    })
   }
   
}

module.exports={
    authMiddleware
}