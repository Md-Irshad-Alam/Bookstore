const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userschema = new mongoose.Schema(
  {
    name: { type: String, requiredd: true },
    email: { type: String, requiredd: true },
    password: { type: String, requiredd: true },
  },
  {
    timestamps: true,
  }
);
userschema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  let hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userschema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userschema.virtual('id').get(function () {
  return this._id.toHexString();
});

userschema.set('toJSON', {
  virtuals: true,
});
const Users = mongoose.model('user', userschema);
module.exports = Users;
