const express = require("express");
const router = require("./routes/router");
const dotenv = require("dotenv");
const connectDB = require("./db/mongooseConnection"); // ✅ correct import

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/v1", router);

// ✅ Proper startup sequence
const startServer = async () => {
    await connectDB();   // 🔥 wait for DB connection

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
};

startServer();