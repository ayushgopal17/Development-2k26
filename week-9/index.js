

const express=require("express");
const jwt=require("jsowebtoken");


const app=express()

app.use(express.json());

const notes=[];
const users=[];

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const userExists= user.find(user=> user.username === username);
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

    const userExists=user.find(user => user.username === username && user.password === password);

    if(!username){
        res.status(403).json({
            message: "Incorrect Creditential"
        })
            return;
    }
const token= jwt.sign({

username: username
}, "Ayush123")
res.json({
    token:token;
})
})



app.post("/notes",(req,res)=>{
    
    const note=req.body.note;
    notes.push(note);
    
  
    res.json({
    message: "Done!"
    })
})
app.get("/notes",(req,res)=>{
    res.json({
    notes
    })

    })

    app.get("/",(req,res)=>{
        res.sendFile("/Users/ayushgopal/Development-2k26/week-9/frontend/index.html")
    })

app.listen(3000)




