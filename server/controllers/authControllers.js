const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUserHandler = async (req, res) => {
    const {username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_PASSWORD_SALT));
    try {
        const user = new User({username, password: hashedPassword, role});
        await user.save(); 
        return res.status(201).json({ "message": "user created successfully." })
    } catch (error) {
        return res.status(500).json({ "message": "USER ERROR: could not add user."})        
    }
}

const loginUserHandler = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            const checkPassword = await bcrypt.compare(password, user.password);
            if (checkPassword) {
                const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});
                return res.json({token})
            }
            else {
                return res.status(400).json({"message": "Invalid credentials"});
            }
        }
        else {
            return res.status(404).json({"message": "User not found"});
        }
    } catch (error) {
        return res.status(500).json({ "message": `USER ERROR: due to: ${error}`}) 
    }
    
}

module.exports = {
    loginUserHandler,
    registerUserHandler
}