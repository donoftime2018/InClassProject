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

        else
        {
            res.status(400).json({message: "Incorrect password"});
        }
    }

    else{
        res.status(400).json({message: "User not found"});
    }
}

exports.register = async (req, res) => {
    const { username, password, email, dateOfBirth } = req.body;
    dateOfBirthParsed = new Date(dateOfBirth);
    try{
            const newUser = new User({
        username: username,
        password: password,
        email: email,
        dateOfBirth: dateOfBirthParsed
    })
    await newUser.save();

    console.log(newUser)

    if (newUser){
        res.status(200).json({message: "User registered successfully"});
    }
    } catch (error){
        console.log(error)
        res.status(400).json({message: error.message});
    }


}