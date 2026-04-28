const express= require ('express')
const { authMiddleware } = require('./middleware')
const app=express()
const jwt= require('jsonwebtoken')
app.use(express.json())

app.post('/signup',(req,res)=>{

})
app.post('/signin',(req,res)=>{

})
app.post('/todo',authMiddleware,(req,res)=>{

    const userId= req.userId;
})
app.get('/todos',authMiddleware,(req,res)=>{
 const userId=req.userId;
})


app.listen(3000)