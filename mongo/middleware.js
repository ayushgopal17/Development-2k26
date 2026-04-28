const jwt= require("jsonwebtoken")

function authMiddleware(req,res,next){
    const token= req.headers.token;


    if(!token) {
        req.status(403).json({
            message: "you are not logged in"
        });
        return;
    }

    if(decode.userId){
    const decode= jwt.verify(token,"Ayush123");
    next();
    }
    else{
        req.status(403).json({
            message: "token invalid or not found"
        })
    }



}

module.exports = { authMiddleware: authMiddleware}


