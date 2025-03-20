const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern';
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;