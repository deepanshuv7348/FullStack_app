import userModel from "../models/userModel";

export const reisterUser = async (req,res)=>{
    const {username, password,firstname, lastname} = req.body;

    const nwUser = new userModel({username,password,firstname,lastname})
    try {
        
    } catch (error) {
        
    }

}