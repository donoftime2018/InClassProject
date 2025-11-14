const express = require('express');
const app = express();
const userController = require('../controllers/userController');

app.post("/login", userController.login)

module.exports = app;
