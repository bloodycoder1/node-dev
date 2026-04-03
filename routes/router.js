const express = require("express")
const { createUser, listUser, updateUser, deleteUser } = require("../controller/UserController")
const router = express.Router()
router.get("/", (req, res) => {
    res.send({ messege: "I am so Good Ray" })
})
router.post("/adduser", createUser)
router.get("/list-user", listUser)
router.post("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
module.exports = router