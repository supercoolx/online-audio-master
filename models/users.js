const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const User = mongoose.model('users', userSchema);

const validateUserLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(3).required(),
        password: Joi.string().min(3).required()
    });
    return schema.validate(data);
}

const validateUserSignup = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(3).required(),
        password: Joi.string().min(3).required(),
    });
    return schema.validate(data);
}

module.exports.User = User;
module.exports.validateUserLogin = validateUserLogin;
module.exports.validateUserSignup = validateUserSignup;