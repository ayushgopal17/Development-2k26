


const dotenv= require("dotenv").config();
const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL);

const UserSchema= new mongoose.Schema({
    username: String,
    password: String
})

const TodoSchema= new mongoose.Schema({
    title: String,
    description: String,
    id : mongoose.Types.ObjectId
})

const userModel=mongoose.model("user",UserSchema);
const TodoModel=mongoose.model("todo",TodoSchema)

module.exports={
userModel,
TodoModel
}