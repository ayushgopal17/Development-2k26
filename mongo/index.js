

const express= require("express");
const jwt=require("jsonwebtoken");
const app=express();
const {userModel,TodoModel}= require("./models")

app.use(express.json());
const {authMiddleware} = require("./middleware");


// let USERS_ID=1;
// let TODOS_ID=1;
// const USERS=[];
// let TODOS=[];

app.post("/signup",async(req,res)=>{
const username=req.body.username;
const password=req.body.password;
//const userExist=USERS.find(u=> u.username === username);
const existingUser=  await userModel.findOne({
    username
})
if(existingUse){
    res.json({
        message: "user with this username already exist"
    })
    return
}
else{
    // USERS.push({
    //     username,
    //     password,
    //     id: USERS_ID++
    // })
    const newuser= await userModel.create({
        username: username,
        password: password,
    
    })
    res.json({
        message: "you are signed up successfully",
        id: newuser._id
    })
}
})

app.post("/signin",async(req,res)=>{
const username=req.body.username;
const password=req.body.password;
//const userExist=USERS.find(u=> u.username=== username && u.password === password);
const userExist= await userModel.findOne({
    username,
    password
})
if(!userExist){
    res.json({
        message: "wrong credientials"
    })
    return
}
else{
    const token=jwt.sign({
       userId: userExist.id
    },"Ayush123")

res.json({
    token
})
}
})

app.post("/todo",authMiddleware, async (req,res)=>{
const userId=req.userId;
const title=req.body.title;
const description=req.body.description;

// TODOS.push({
//     id: TODOS_ID++,
//     title,
//     description,
//     userId: userId

// })

const todo= await TodoModel.create({
    title: title,
    description: description,
    userId
})
res.json({
    message: "todo created successfully"
})

})

app.get("/todos",authMiddleware,(req,res)=>{
const userId=req.userId;
//const userTodos=TODOS.filter(t=> t.userId=== userId);
const userTodos= TodoModel.filter({
    userId
})
res.json({
    todos: userTodos
})

})
app.delete("/todos",authMiddleware,async (req,res)=>{
const userId=req.userId;
const todoId= Number(req.params.todoId);

//const todo= TODOS.find(t=> t.id=== todoId && t.userId === userId);
const todo= await TodoModel.findOne({
    userId,
   _id: todoId
})

if(todo){
   // TODOS= TODOS.filter(t=> t.id!== todoId)
   const TODO= await TodoModel.deleteOne({
    _id: todoId,
    userId
   }) 

res.json({
    message: "todo deleted successfully"
})
}
else{
    res.json({
        message: "either todo does not exist or you are not the owner"
    })
}

})

app.listen(3000)