const express= require("express")
const {Pool}= require('pg') 
const dotenv=require("dotenv").config();
const pool= new Pool({
    connectionString: process.env.DB_URL
})


const app=express();
app.use(express.json());

app.post("/signup",async(req,res) => {

    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

       
    const result=await pool.query (` INSERT INTO users (username,password,email) VALUES ($1,$2,$3) RETURNING ID`,[username,email,password]);

  
    res.json({
        message: "signup done",
       id: result.rows[0].id
    })

})

app.post("/signin", async(req,res)=>{
    //const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    

    const response = await pool.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`);
    console.log(response)

    const userExist= response.rows[0];

    if(!userExist){
        res.json({
            message: "Incorrect credientials"
        })
    }
    else{
        
        const token=jwt.sign({

        })
    
   res.json({
   
})
    }
})


app.listen(3000)