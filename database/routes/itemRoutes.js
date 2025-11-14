const express = require('express');
const app = express();
const itemController = require('../controllers/itemController');

app.get("/", itemController.getAllItems)

module.exports = app;