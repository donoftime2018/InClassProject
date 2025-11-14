const Item = require('../models/Item');

exports.getAllItems = async(req, res)=>{
    const items =  await Item.find();
    res.status(200).json(items);
}
