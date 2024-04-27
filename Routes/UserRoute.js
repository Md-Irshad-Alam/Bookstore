const express = require('express');
const userRoute = express.Router();
const { login, register, getLoggedInUser } = require('../Controller/Auth');
const authmiddleware = require('../middleware/Middleware');

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.get('', authmiddleware, getLoggedInUser);

module.exports = userRoute;
