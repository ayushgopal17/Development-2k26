

const express=require("express")
const app=express()

const notes=[];

app.post("/notes",(req,res)=>{
    
    const note=req.body.note;
    notes.push(note);
    
  
    res.json({
    message: "Done!"
    })
})
app.get("notes",(req,res)=>{
    res.json({
    notes
    })

    })

    app.get("/",(req,res)=>{
        res.sendFile("/Users/ayushgopal/Development-2k26/week-9/frontend/index.html")
    })

app.listen(3000)

