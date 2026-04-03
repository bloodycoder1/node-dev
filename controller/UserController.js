const userModel = require("../models/UserModel")
const { bcryptFunction } = require("./bcryptFile")
const { userValidator, updateUserValidator, roleIdentifier } = require("../middleware/validator");

exports.createUser = [
    userValidator,
    roleIdentifier,
    async (req, res) => {
        const userData = req.body;
        if (await userModel.findOne({ email: userData.email })) {
            return res.json({ message: "User Already Exisits" })
        } else {
            let password = await bcryptFunction(userData.password)
            await userModel.create({ ...userData, password: password })
            res.json({ message: "The User Added sucessfully " })
        }
    }
]

exports.listUser = [
    roleIdentifier,
    async (req, res) => {
        try {
            const users = await userModel.find();
            return res.json(users)
        }
        catch (error) {
            return res.json({ message: error })
        }
    }
]

exports.updateUser = [
    updateUserValidator,
    roleIdentifier,
    async (req, res) => {
        try {
            const { id } = req.params;
            const userData = req.body;
            await userModel.findByIdAndUpdate(id, userData)
            return res.json({ message: "User has been sucessfully updated" })
        }
        catch (Err) {
            return res.json({ messege: Err })
        }
    }
]

exports.deleteUser = [
    roleIdentifier,
    async (req, res) => {
        const { id } = req.params;
        let userData = await userModel.findById(id);
        if (!userData) {
            return res.status(404).json({ message: "User not found" })
        }
        await userModel.findByIdAndDelete(id)
        return res.json({ message: "User deleted successfully" })
    }
]