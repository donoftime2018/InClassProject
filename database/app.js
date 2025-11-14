const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/database');
const app = express();

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})