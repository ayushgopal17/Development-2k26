const mongoose= require("mongoose");
mongoose.connect("your url/");

const UserSchema= new mongoose.Schema({
    username: String,
    password: String
});

const TodoSchema= new mongoose.Schema({
    title: String,
    description:String,
    userId: mongoose.Types.ObjectId
})

const userModel= mongoose.model("users",UserSchema);
const todomodel=mongoose.model("todos",TodoSchema);

module.exports={
    userModel:userModel,
    todomodel:todomodel
}

