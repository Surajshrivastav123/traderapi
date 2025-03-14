// controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

const bcrypt = require('bcrypt');

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
};

exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        const user = new User({ username, password: hashedPassword });
        await user.save();

        const token = generateToken(user);
        res.status(201).json({ success: true, token, user: { username } });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.login = async (req, res) => {
    const { username,  password } = req.body;

    try {
        const user = await User.findOne({ username });
        console.log("Fetched User:", user);
    
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    
        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Is Password Valid:", isPasswordValid);
    
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    
        const token = generateToken(user);
        res.json({ success: true, token, user: { username: user.username } });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
    
    
};
