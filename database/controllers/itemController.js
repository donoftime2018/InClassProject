const Item = require('../models/Item');
const User = require('../models/User');

exports.getAllItems = async(req, res)=>{
    const items =  await Item.find();
    res.status(200).json(items);
}

exports.addNewItem = async(req, res)=>{
    const {name, description, price, site, userName} = req.body;
    console.log(req.body)
    let user = await User.findOne({username: userName});
    console.log(user);

    console.log(req.body);
    try {
        const newItem = new Item({
            itemName: name,
            description: description,
            price: price,
            site: site,
            userPosted: user._id
        })
        await newItem.save();
        console.log(newItem);
        if(newItem)
            res.status(200).json({message: "Item successfully added"})
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: err.message});
    }
}