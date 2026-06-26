const express= require("express");
const app= express();
const jwt=require("jsonwebtoken");
const { authmiddleware } = require("./middleware");

app.use(express.json());

const USERS=[];
const TODOS=[];

let USERS_ID=1;
let TODOS_ID=1;

app.post("/signup",(req,res)=>{
const username= req.body.username;
const password=req.body.password;

const userExist=USERS.find(u=> u.username=== username)
if(userExist){
    res.json({
        message: "username already exist"
    })
    return
}
else{
    USERS.push({
        username,
        password,
        userId: USERS_ID++
    })
    res.json({
        message : "you are signed up successfully"
    })
}
})

app.post("/signin",(req,res)=>{

    const username= req.body.username;
    const password=req.body.password;
    const userExist=USERS.find(u=> u.username === username && u.password === password);
    if(!userExist){
        res.json({
            message: "invalid username or password"
        })
        return
    }
    else{
        const token = jwt.sign({ userId: userExist.userId},"Ayush123" )
        res.json({
            token,
            message: " you are signed in successfully"
        })
        
    }
})

app.post("/todos",authmiddleware,(req,res)=>{
const title= req.body.title;
const description=req.body.description;
const userId=req.userId;

TODOS.push({
    title,
    description,
    userId,
    todoId: TODOS_ID++
})
res.json({
    message: "todo created successfully"
})
})

app.get("/todo",authmiddleware,(req,res)=>{
const userId=req.userId;

const todos=TODOS.filter(t=>  t.userId=== userId);
if(todos){
    res.json({
        todos
    })
}
else{
    res.json({
        message: "todo not found "
    })
}
})

app.listen(3000)