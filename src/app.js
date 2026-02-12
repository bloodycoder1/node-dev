let express = require("express");
const app = express();

// app.use("/")
app.use((req,res)=>{
    res.send("Hellow From the Server")
})
app.listen(3000, ()=>{
    console.log("Server is sucessfully started");
    
})