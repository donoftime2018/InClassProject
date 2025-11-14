const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://donoftime2018_db_user:I6KZT5YJvdrEDNyM@in-class-cluster.btojmo9.mongodb.net/?appName=in-class-cluster&retryWrites=true").then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})