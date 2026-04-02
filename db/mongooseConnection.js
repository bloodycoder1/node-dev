const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = process.env.MONGO_URL;

        await mongoose.connect(connection + "/user-management");

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log("❌ MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;