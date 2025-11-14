const Schema = require('mongoose').Schema;
const User = require("./User")

const Item = new Schema({
    itemName: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    site: {type: String, required: true},
    description: {type: Date, required: true},
    numLikes: {type: Number, required: true},
    usersLiked: [{type: Schema.Types.ObjectId, ref: 'User'}],
    userPosted: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})


module.exports = require('mongoose').model('Item', Item);