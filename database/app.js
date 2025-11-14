const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('express');
dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})

app.get("/", (req, res) => {
    res.send("Hello World");
});