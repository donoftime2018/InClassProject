const Schema = require('mongoose').Schema;
const Item = require("./Item")
const bcrypt = require('bcrypt')

const User = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    dateOfBirth: {type: Date, required: true},
    likedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    postedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}]
})

User.pre('save', function (next) {
    console.log(this.password)
    this.password = bcrypt.hashSync(this.password, 10);
    console.log(this.password)
})

module.exports = require('mongoose').model('User', User);