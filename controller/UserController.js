const userModel = require("../models/UserModel")
exports.createUser= async(req,res)=>{
    const userData = req.body;
    if(!userData || !userData.name || !userData.age){
        res.json({message:"All Fields are required"})
        return
    }
    await userModel.collection.insertOne(userData)
    res.json({message:"The User Added sucessfully "})
}