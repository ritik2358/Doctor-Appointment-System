const express = require('express')
// import { BrowserRouter } from 'react-router-dom';
const { loginController, registerController } = require('../controllers/userCtrl');

//router onject
const router = express.Router()

//routes
//login || post
router.post('/login', loginController)

//register || post
router.post('/register', registerController)

module.exports = router