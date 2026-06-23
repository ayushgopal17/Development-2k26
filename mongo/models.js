// const mongoose= require("mongoose");
// //mongoose.connect(your mongo url/todos");


// const UserSchema= new mongoose.Schema({
//     username: String,
//     password: String
// });

// const TodoSchema= new mongoose.Schema({
//     title: String,
//     description:String,
//     userId: mongoose.Types.ObjectId
// })

// const userModel= mongoose.model("users",UserSchema);
// const todomodel=mongoose.model("todos",TodoSchema);

// module.exports={
//     userModel:userModel,
//     todomodel:todomodel
// }
const dotenv=require("dotenv").config();
const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL)

const UserSchema= new mongoose.Schema({
    username: String,
    password: String
});

const TodoSchema= new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Types.ObjectId
})

const userModel=mongoose.model("users",UserSchema);
const todoModel=mongoose.model("todo",TodoSchema);
module.exports={
    userModel:userModel,
    todoModel:todoModel
}