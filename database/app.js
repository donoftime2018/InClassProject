const express = require('express');
const connectDB = require('./config/database');
const user = require('./routes/userRoutes');
const item = require('./routes/itemRoutes');
const bodyParser = require('body-parser');
const app = express();

connectDB();

app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(user)
app.use('/items', item)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})