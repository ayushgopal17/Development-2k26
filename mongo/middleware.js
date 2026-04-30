// const jwt= require("jsonwebtoken")

// function authMiddleware(req,res,next){
//     const token= req.headers.token;


//     if(!token) {
//         req.status(403).json({
//             message: "you are not logged in"
//         });
//         return;
//     }

//     if(decode.userId){
//     const decode= jwt.verify(token,"Ayush123");
//     next();
//     }
//     else{
//         req.status(403).json({
//             message: "token invalid or not found"
//         })
//     }



// }

// module.exports = { authMiddleware: authMiddleware}


const jwt=require('jsonwebtoken')

function authMiddleware(req,res,next){
   const token=req.headers.token;
   
   const decode=jwt.verify(token,"Ayush123");
   const userId=parseInt(decode.userId);

   if(userId){
    
    req.userId=userId;
    next();
   }
   else{
    res.status(403).json({
        message: "Token was incorrect"
    })
   }
}

module.exports={authMiddleware}

