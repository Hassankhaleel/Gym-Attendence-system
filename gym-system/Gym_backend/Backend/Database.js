import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://hassan:hassan@hassancluster.1ga0s.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=hassancluster"
        );
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        // Stop the server if DB connection fails
    }
};

export default connectDB;
