
// const jwt= require("jsonwebtoken")


// function authMiddleware(req,res,next){
//       try{
//     const token = req.headers.token;

    
//     const decoded=jwt.verify(token,"Ayush123")

  
// if(decoded.userId){
//     req.userId = decoded.userId;
//     next();
// }
// else{
//     res.status(403).json({
//         message: "Invalid token found"
//     });
// }
// }

// catch(err){
// res.status(403).send({
//     message: "Invalid Token"
// });
// }
// }
// module.exports={
//     authMiddleware
// };


const jwt=require("jsonwebtoken")


function authMiddleware(req,res,next){
const token= req.headers.token;
const decoded=jwt.verify(token,"Ayush123");

if(decoded.userId){
    req.userId=decoded.userId;
    next();
}
else{
    res.status(403).json({
        message: "token invalid"
    })
}
}

module.exports={
    authMiddleware
   
   
}


