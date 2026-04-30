const express= require ('express')
const { authMiddleware } = require('./middleware')
const app=express()
const jwt= require('jsonwebtoken')
app.use(express.json());

let USERS=[];
let TODOS=[];
let CURRENT_TODO_ID=1;

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const existingUser= USERS.find(u=> u.username=== username);
        if(existingUser){
            res.status(403).send({
                message: "user already exist please signin"
            })
            return
        }
        USERS.push({
            id: CURRENT_TODO_ID++,
            username: username,
            password: password
        })

        res.json({
            id: CURRENT_TODO_ID-1
        })

    
})

app.post('/signin',(req,res)=>{

      const username=req.body.username;
    const password=req.body.password;

    const existingUser= USERS.find(u=> u.username=== username && u.password ===password);
        if(!existingUser){
            res.status(403).send({
                message: "INcorrect credientials"
            })
            return
        }
       const token =jwt.sign({
        userId: existingUser.id
       },"Ayush123")

       res.json({
        token
       })

})
app.post('/todo',authMiddleware,(req,res)=>{

    const userId= req.userId;
   const title=req.body.title;
   const description=req.body.description;
   TODOS.push({
    id: CURRENT_TODO_ID++,
    title,
    description,
    userId
   })
   res.json({
    message: "Tood created successfully"
   })

})

app.delete('/todo/:todoId',authMiddleware,(req,res)=>{

     const userId=req.userId;
     const todoId=parseInt(req.params.todoId);

    const doesUserOwnsTodo =TODOS.find(t=> t.id=== todoId && t.userId === userId );
  
    if(doesUserOwnsTodo){
        TODOS= TODOS.filter(t => t.id= todoId);
        res.json({
            message: "Todo Deleted"
        })
    }
    else{
        res.json({
            message: "Either Todo don't exist or it is not your todo"
        })
    }


})


app.get('/todos',authMiddleware,(req,res)=>{
 const userId=req.userId;

 const userTodos=TODOS.filter(t=> t.userId=== userId);

 res.json({
    todos: userTodos
 })
})


app.listen(3000)