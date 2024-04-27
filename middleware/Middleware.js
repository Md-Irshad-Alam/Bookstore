require('dotenv').config();
const jwt = require('jsonwebtoken');
const Users = require('../Schemas/user');

async function authmiddleware(req, res, next) {
  const authorization = req.headers['authorization'];
  if (authorization) {
    // validate the tokena

    const token = authorization.split(' ').pop();

    if (token) {
      try {
        jwt.verify(token, process.env.USER_TOKEN);

        let user = jwt.decode(token);

        user = await Users.findById(user._id);

        user = user.toJSON();
        // delete user.password;
        req.user = user;

        next();
      } catch (err) {
        return res.status(401).send({
          message: 'Invalid token provided',
        });
      }
    } else {
      return res.status(401).send({
        message: 'No auth token present',
      });
    }
  } else {
    return res.status(401).send({
      message: 'User is not logged in',
    });
  }
}

module.exports = authmiddleware;
