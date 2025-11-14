const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    console.log(username + ", " + password);

    const findUser = await User.findOne({ username: username})

    console.log(findUser)

    if (findUser){
        const passwordMatch = bcrypt.compareSync(password, findUser.password);
        console.log(passwordMatch)

        if (passwordMatch)
        {
            res.status(200).json(findUser)
        }
    }

    else{
        res.status(400).json({message: "User not found"});
    }
}