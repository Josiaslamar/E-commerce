const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')

//signup
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) return res.json({ success: false, message: 'User Already exists with the same email!! Please try us another one' })
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName, email, password: hashPassword
        })
        await newUser.save()
        res.status(200).json({
            success: true,
            message: "Registration Successful"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Error occurred'
        })
    }
}
//login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) return res.json({
            success: false,
            message: "User doesn't exists! Please register first"
        })
        const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
        if(!checkPasswordMatch) 
        return res.json({
            success: false,
            message: "Incorrect password! Please tr again"
        })
        const token = jwt.sign({
            id: checkUser._id, role: checkUser.role, email: checkUser.email
        }, 'CLIENT_SECRET_KEY',{expiresIn: '60m'})
        res.cookie('token', token, {httpOnly: true, secure: false}).json({
            success: true,
            message: 'Logged in successfully',
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser._id
            }
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Error occurred'
        })
    }
}


//logout





//auth middleware
module.exports = { registerUser, loginUser };