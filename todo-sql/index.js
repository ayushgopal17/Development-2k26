// const express= require("express")
// const {Pool}= require('pg') 
// const dotenv=require("dotenv").config();
// const pool= new Pool({
//     connectionString: process.env.DB_URL
// })


// const app=express();
// app.use(express.json());

// app.post("/signup",async(req,res) => {

//     const username=req.body.username;
//     const password=req.body.password;
//     const email=req.body.email;

       
//     const result=await pool.query (` INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING ID`,[username,email,password]);

  
//     res.json({
//         message: "signup done",
//        id: result.rows[0].id
//     })

// })

// app.post("/signin", async(req,res)=>{
//     //const username=req.body.username;
//     const email=req.body.email;
//     const password=req.body.password;
    

//     const response = await pool.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`);
//     console.log(response)

//     const userExist= response.rows[0];

//     if(!userExist){
//         res.json({
//             message: "Incorrect credientials"
//         })
//     }
//     else{
        
//         const token=jwt.sign({

//         })
    
//    res.json({
   
// })
//     }
// })


// app.listen(3000)



const express= require("express");  
const {Pool} =require('pg')
const jwt=require("jsonwebtoken")
const dotenv=require('dotenv').config();
const pool= new Pool({
    connectionString: process.env.DB_URL
})
const bcrypt= require("bcrypt");
const z=require("zod");


const app=(express());
app.use(express.json());
const SignupSchema= z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.string().email()
})

app.post("/signup", async(req,res)=>{

    const {data,success,error}= SignupSchema.safeParse(req.body)

    if(!success){
        res.status(403).json({
            message: "incorrect inputs",error: error.issues
        })
        return
    }



 const username=data.username;
 const email=data.email;
const password=data.password;

  


  const hashedpassword=await bcrypt.hash(password,10);

 const response= await pool.query(`INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING ID`,[username,hashedpassword,email]);

 res.json({
    message: "signup done",
    id: response.rows[0].id
 })
})


app.post("/signin", async(req,res)=>{

   // const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

const response = await pool.query(`SELECT * FROM users WHERE email = $1`,[email]);

const userExist= response.rows[0];

if(!userExist){
    res.json({
        message: "invalid credientials"
    })
    return
}
else{
    const correctpassword=await bcrypt.compare(password,userExist.password) ;

if(correctpassword){

     const token = jwt.sign({userId : userExist.id},process.env.JWT_SECRET)
res.json({
    token
}
    
)
}
else{ res.json({
        message: "invalid credientials"
    })

}

}
})

app.listen(3000)