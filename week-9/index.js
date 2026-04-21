

const express=require("express");
const jwt=require("jsonwebtoken");


const app=express()

app.use(express.json());

const notes=[];
const users=[];

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const userExists= users.find(user=> user.username === username);
    if(userExists) {
        return res.status(403).json({
            message: "User with username alreaduy exist"
        })
    }

    users.push({
        username: username ,
        password: password
    })
    res.json({
        message: "you have signup"
    })
})

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExists=users.find(user => user.username === username && user.password === password);

    if(!userExists){
        res.status(403).json({
            message: "Incorrect Creditential"
        })
            return;
    }
const token= jwt.sign({

username: username
}, "Ayush123")
res.json({
    token:token
})
})



app.post("/notes",(req,res)=>{
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




    const note=req.body.note;
    notes.push({
        note,username});
    
  
    res.json({
    message: "Done!"
    })
})
app.get("/notes",(req,res)=>{
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

    const userNotes =notes.filter(note => note.username === username)
    res.json({
     notes: userNotes
    })
   

    })

    app.get("/",(req,res)=>{
        res.sendFile("/Users/ayushgopal/Development-2k26/week-9/frontend/index.html")
    })

        app.get("/signup",(req,res)=>{
        res.sendFile("/Users/ayushgopal/Development-2k26/week-9/frontend/signup.html")
    })


        app.get("/signin",(req,res)=>{
        res.sendFile("/Users/ayushgopal/Development-2k26/week-9/frontend/signin.html")
    })

app.listen(3000)




