
const jwt=require("jsonwebtoken")
function authmiddleware(req,res,next){


const token= req.headers.token;
if(!token){
    res.json({
        message: "token not found"
    })
    return
}
else{
    const decoded =jwt.verify(token,"Ayush123") 
    
    if(decoded){
   req.userId=decoded.userId;
        next();
    }
}
}

module.exports={
    authmiddleware
}