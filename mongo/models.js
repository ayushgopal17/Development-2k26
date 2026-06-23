// const mongoose= require("mongoose");
<<<<<<< HEAD
// //mongoose.connect(your mongo url/todos");
=======
// //mongoose.connect("your mongo url/todo");
>>>>>>> 0537af2 (save current work)

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

const mongoose=require("mongoose")

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