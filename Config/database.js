// Config/database.js

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/myporfoliowebsites';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDB;
