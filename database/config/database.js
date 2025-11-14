const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connectDB() {
    console.log(process.env.MONGODB_LOCAL);
    mongoose.connect(process.env.MONGODB_LOCAL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })
}

module.exports = connectDB;