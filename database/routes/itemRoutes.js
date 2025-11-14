const express = require('express');
const app = express();
const Item = require('../models/Item');

app.get("/items", async (req, res) => {
    const items =  await Item.find();
    res.status(200).json(items);
})

module.exports = app;