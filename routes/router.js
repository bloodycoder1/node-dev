const express = require("express")
const { createUser } = require("../controller/UserController")
const router = express.Router()
router.get("/",(req,res)=>{
    res.send({messege:"I am so Good Ray"})
})
router.post("/adduser", createUser)

module.exports=router