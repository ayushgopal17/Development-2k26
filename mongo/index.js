// const express= require ('express')
// const { authMiddleware } = require('./middleware')
// const app=express()
// const jwt= require('jsonwebtoken')
// app.use(express.json());

// let USERS=[];
// let TODOS=[];
// let CURRENT_TODO_ID=1;

// app.post("/signup",(req,res)=>{
//     const username=req.body.username;
//     const password=req.body.password;

//     const existingUser= USERS.find(u=> u.username=== username);
//         if(existingUser){
//             res.status(403).send({
//                 message: "user already exist please signin"
//             })
//             return
//         }
//         USERS.push({
//             id: CURRENT_TODO_ID++,
//             username: username,
//             password: password
//         })

//         res.json({
//             id: CURRENT_TODO_ID-1
//         })

    
// })

// app.post('/signin',(req,res)=>{

//       const username=req.body.username;
//     const password=req.body.password;

//     const existingUser= USERS.find(u=> u.username=== username && u.password ===password);
//         if(!existingUser){
//             res.status(403).send({
//                 message: "INcorrect credientials"
//             })
//             return
//         }
//        const token =jwt.sign({
//         userId: existingUser.id
//        },"Ayush123")

//        res.json({
//         token
//        })

// })
// app.post('/todo',authMiddleware,(req,res)=>{

//     const userId= req.userId;
//    const title=req.body.title;
//    const description=req.body.description;
//    TODOS.push({
//     id: CURRENT_TODO_ID++,
//     title,
//     description,
//     userId
//    })
//    res.json({
//     message: "Tood created successfully"
//    })

// })

// app.delete('/todo/:todoId',authMiddleware,(req,res)=>{

//      const userId=req.userId;
//      const todoId=parseInt(req.params.todoId);

//     const doesUserOwnsTodo =TODOS.find(t=> t.id=== todoId && t.userId === userId );
  
//     if(doesUserOwnsTodo){
//         TODOS= TODOS.filter(t => t.id= todoId);
//         res.json({
//             message: "Todo Deleted"
//         })
//     }
//     else{
//         res.json({
//             message: "Either Todo don't exist or it is not your todo"
//         })
//     }


// })


// app.get('/todos',authMiddleware,(req,res)=>{
//  const userId=req.userId;

//  const userTodos=TODOS.filter(t=> t.userId=== userId);

//  res.json({
//     todos: userTodos
//  })
// })


// app.listen(3000)


const express = require("express");
const{ authMiddleware}= require("./middleware")
const jwt =require("jsonwebtoken")
const app=express()
const {todomodel,userModel}= require("./models")

app.use(express.json())

// let CURRENT_TODO_ID=1;
// let CURRENT_USER_ID=1;
// let USERS=[];
// let TODOS=[];

app.post("/signup", async(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    //const existingUser= USERS.find(u=> u.username===username);
    const existingUser=await userModel.findOne({
        username: username,
        password: password
    })
    if(existingUser){
        res.status(403).json({
            message: "Message with this username already exist"
        })
        return
    }
    const newUser= userModel.create({
        username: username,
        password: password
    })
    res.json({
        id: newUser._id
    })
})

app.post("/signin",async(req,res)=>{
const username=req.body.username;
const password=req.body.password;

//const userExist= USERS.find(u=> u.username=== username && u.password === password);
const userExist= await userModel.findOne({
    username: username,
    password:password
})
if(!userExist){
    res.json({
        message: "Incorrect credientials"
    })
    return
}
else{
    const token =jwt.sign({
        userId: userExist.id
    },"Ayush123")
    res.json({
        token
    })
}
})

app.post("/todo",authMiddleware,(req,res)=>{
const userId=req.userId;
const title=req.body.title;
const description= req.body.description;

todomodel.create({
 
    title,
    description,
    userId
})
// TODOS.push({
//     id: CURRENT_TODO_ID,
//     title,
//     description,
//     userId: userId
// })
res.json({
    message: "Todo created"
})

})
app.delete("/todo",authMiddleware,async(req,res)=>{


    const userId=req.userId;
    const todoId=parseInt(req.params.todoId);
const doesUserOwnsTodo= todomodel.findOne({
    id: todoId,
    userId: userId
})
if(doesUserOwnsTodo){
   await todomodel.deleteOne({
    id: todoId
   })
    res.json({
        message: "Deleted"
    })
}
else{
    res.status(403).json({
        message: "Either todo does't exist or you are deleting other's todo"
    })
}
})


app.get("/todos",authMiddleware,async(req,res)=>{
const userId=req.userId;
const userTodos= await todomodel.find({
    userId: userId
})
res.json({
    todos: userTodos
})
})

app.listen(3000)