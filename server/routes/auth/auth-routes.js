 const express = require('express');
 const {registerUser, loginUser} = require("../../controllers/auth/auth-controller")
 const router = express.Router();

 router.post('/signup', registerUser)
 router.post('/login', loginUser)
 
 module.exports = router;