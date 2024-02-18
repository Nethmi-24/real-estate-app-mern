import mongoose, { mongo } from "mongoose";

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true  //mongo db will check the uniqueness of username before adding to database
    },
    email:{
        type:String,
        required:true,
        unique:true  
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true}
);

const User=mongoose.model('User',userSchema);
export default User;