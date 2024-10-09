import mongoose, { model, Types } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        Types:String,
        required:true
    },
    password:{
        Types:String,
        required:true
    },
    firstname:{
        Types:String,
        required:true
    },
    lastname:{
        Types:String,
        required:true
    },
    isAdmin: {
        Types:String,
        default:false
    },
    profilePicture:String,
    coverPicture:String,
    about:String,
    livesin:String,
    worksAt:String,
    relationship:String,
    followers:[],
    following:[]
},{timestamps:true});


const userModel = mongoose.model('Users', userSchema);
export default userModel;