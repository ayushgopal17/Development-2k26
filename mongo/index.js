
// const express = require("express");
// const{ authMiddleware}= require("./middleware")
// const jwt =require("jsonwebtoken")
// const app=express()
// const {todomodel,userModel}= require("./models")

// app.use(express.json())

// app.post("/signup", async(req,res)=>{

//     const username=req.body.username;
   

//     //const existingUser= USERS.find(u=> u.username===username);
//     const existingUser=await userModel.findOne({
//         username: username,
//         password: password
//     })
//     if(existingUser){
//         res.status(403).json({
//             message: "Message with this username already exist"
//         })
//         return
//     }
//     const newUser= await userModel.create({
//         username: username,
//         password: password
//     })
//     res.json({
//         id: newUser._id
//     })
// })

// app.post("/signin",async(req,res)=>{
// const username=req.body.username;
// const password=req.body.password;

// //const userExist= USERS.find(u=> u.username=== username && u.password === password);
// const userExist= await userModel.findOne({
//     username: username,
//     password:password
// })
// if(!userExist){
//     res.json({
//         message: "Incorrect credientials"
//     })
//     return
// }
// else{
//     const token =jwt.sign({
//         userId: userExist.id
//     },"Ayush123")
//     res.json({
//         token
//     })
// }
// })

// app.post("/todo",authMiddleware,async(req,res)=>{
// const userId=req.userId;
// const title=req.body.title;
// const description= req.body.description;

// todomodel.create({
 
//     title,
//     description,
//     userId
// })
// // TODOS.push({
// //     id: CURRENT_TODO_ID,
// //     title,
// //     description,
// //     userId: userId
// // })
// res.json({
//     message: "Todo created"
// })

// })
// app.delete("/todo/:todoId",authMiddleware,async(req,res)=>{


//     const userId=req.userId;
//     const todoId = req.params.todoId;
// const doesUserOwnsTodo= await todomodel.findOne({
//     _id: todoId,
//     userId: userId
// })
// if(doesUserOwnsTodo){
//    await todomodel.deleteOne({
//     _id: todoId
//    })
//     res.json({
//         message: "Deleted"
//     })
// }
// else{
//     res.status(403).json({
//         message: "Either todo does't exist or you are deleting other's todo"
//     })
// }
// })


// app.get("/todos",authMiddleware,async(req,res)=>{
// const userId=req.userId;
// const userTodos= await todomodel.find({
//     userId: userId
// })
// res.json({
//     todos: userTodos
// })
// })

// app.listen(3000)



const dotenv=require("dotenv").config();
const {userModel,todoModel}=require("./models")
const express= require("express")
const {authMiddleware} =require("./middleware")
const app= express();
const jwt=require("jsonwebtoken");
const { Model } = require("mongoose");

app.use(express.json())

// let USERS_ID=1;
// let TODOS_ID=1;

// const USERS=[];
// const TODOS=[];

app.post("/signup",async(req,res)=>{
const username=req.body.username;
const password=req.body.password;

//const userExist=USERS.find(u=> u.username=== username)
const userExist= await userModel.findOne({
    username:username
})
if(userExist){
    res.json({
        message: "user already exist"
    })
    return 
}
else{
    // USERS.push({
    //     id: USERS_ID++,
    //     username,
    //     password
    // })
    const newUser= await userModel.create({
        username:username,
        password:password
    })
    res.json({
       id:newUser._id
    })
}


})
app.post("/signin",async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    //const userExist=USERS.find(u=> u.username === username && u.password=== password);
    const userExist= await userModel.findOne({
        username: username,
        password: password
    })
    if(!userExist){
        res.json({
            message: "invalid credientials"
        })
        return
    }
    const token=jwt.sign({
        userId: userExist.id
    },"Ayush123")
    res.json({
        token
    })
})


app.post("/todo",authMiddleware,async(req,res)=> {
    const userId=req.userId;
    const title= req.body.title;
    const description=req.body.description;
    // TODOS.push({
    //     id: TODOS_ID++,
    //     title,
    //     description,
    //     userId: userId
    // })
   const newuser= await todoModel.create({
    title,
    description,
    userId
   })

    res.json({
 message: "Todo created"
    })
   
})

app.delete("/todos",authMiddleware,async (req,res)=>{
const userId=req.userId;
const todoId=Number(req.params.todoId);

//const todo=TODOS.find(t=> t.userId=== userId && t.id=== todoId)
const todo= await todoModel.findOne({
    userId: userId,
    _id: todoId
})
if(todo){
   // TODOS=TODOS.filter(t=> t.id===todoId);
   const todo= await todoModel.deleteOne({
    _id: todoId,
    userId
   })
    res.json({
        message : "Todo deleted"
    })
}
else{
    res.json({
        message:"EIther todo doesn't exist or this is not your todo"
    })
}

})

app.get("/todos",authMiddleware,async (req,res)=>{
    const userId=req.userId;
   // const userTodos= TODOS.filter(t=> t.userId===userId);{
   const userTodos=await todoModel.find({
    userId: userId
   })
        res.json({
todos: userTodos
        })
    }
)


app.listen(3000)