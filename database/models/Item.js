const Schema = require('mongoose').Schema;
const User = require("./User")

const Item = new Schema({
    itemName: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    site: {type: String, required: true},
    description: {type: String, required: true},
    numLikes: {type: Number, default: 0, required: true},
    usersLiked: [{type: Schema.Types.ObjectId, ref: 'User'}],
    userPosted: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})
Item.post('save', function(error, doc, next) {
   
    if(error.name === 'MongoServerError' && error.code === 11000)
    {
        return next(new Error(`Item with name ${doc.itemName} already exists`));
    }

    next()
})

module.exports = require('mongoose').model('item', Item);