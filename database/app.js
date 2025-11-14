const express = require('express');
const connectDB = require('./config/database');
const user = require('./routes/userRoutes');
const item = require('./routes/itemRoutes');
const app = express();

connectDB();

app.use(user)
app.use('/items', item)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})