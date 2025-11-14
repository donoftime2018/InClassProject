const Schema = require('mongoose').Schema;
const Item = require("./Item")
const bcrypt = require('bcrypt')

const User = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true, validate: {
        validator: function(v) {
            return /\^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
        },
        message: props => `${props.value} is not a valid email address!`
    }},
    dateOfBirth: {type: Date, required: true},
    likedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}],
    postedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}]
})

User.pre('save', function (next) {
    console.log(this.password)
    this.password = bcrypt.hashSync(this.password, 10);
    console.log(this.password)
    next()
})


module.exports = require('mongoose').model('user', User);