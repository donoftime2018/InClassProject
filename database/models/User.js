const Schema = require('mongoose').Schema;
const Item = require("./Item")

const User = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    likedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    postedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}]
})

module.exports = require('mongoose').model('User', User);