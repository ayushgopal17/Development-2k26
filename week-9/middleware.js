const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){
      const token=req.headers.token;
 if(!token) {
        res.status(403).send({
            message: "you are not loggrd in"
        });
        return ;
    }

    const decode=jwt.verify(token,"Ayush123")

    const username=decode.username;

    if(!username){
        res.status(403).json({
            message: "malform token"
        })
        return
    }

    req.username=username;

    next()
}

module.exports ={
    authMiddleware
}