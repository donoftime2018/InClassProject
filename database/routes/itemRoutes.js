const express = require('express');
const app = express();
const itemController = require('../controllers/itemController');

app.get("/", itemController.getAllItems)
app.post("/addItem", itemController.addNewItem)

module.exports = app;