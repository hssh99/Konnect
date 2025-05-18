const mongoose = require("mongoose");
require('dotenv').config()

// Connect to database
const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGO_URI
    );
}

module.exports = connectDB;

