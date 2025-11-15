const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connectDB() {
    console.log(process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })
    mongoose.set('setDefaultsOnInsert', true);
}

module.exports = connectDB;