const bcrypt = require("bcrypt")
const salt = 10
 exports.bcryptFunction = async (plaintext)=>{
    const hash =await bcrypt.hash(plaintext,salt);
    return hash
}