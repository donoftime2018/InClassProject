const Schema = require('mongoose').Schema;
const Item = require("./Item")
const bcrypt = require('bcrypt')

const User = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true, validate: {
        validator: function(v) {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v)
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

User.post('save', function(error, doc, next) {
   
    if(error.name === 'MongoServerError' && error.code === 11000)
    {
        return next(new Error('Username or email already exists'));
    }

    next()
})


module.exports = require('mongoose').model('user', User);