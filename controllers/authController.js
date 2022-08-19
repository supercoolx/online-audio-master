const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, validateUserLogin, validateUserSignup } = require('../models/users');

const handleUserLogin = async (req, res) => {
    let validate = validateUserLogin(req.body);
    if (validate.error) return res.json({ success: false, message: validate.error.details[0].message });
    
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.json({ success: false, message: 'Email or password is incorrect.' });

    let isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.json({ success: false, message: 'Email or password is incorrect.' });

    let token = 'Bearer ' + jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.json({ success: true, token });
}

const handleUserSignup = async (req, res) => {
    let validate = validateUserSignup(req.body);
    if (validate.error) return res.json({ success: false, message: validate.error.details[0].message });

	let exist = await User.findOne({ email: req.body.email });
	if (exist) return res.json({ success: false, message: 'Email already in use.' });

    let password_hash = await bcrypt.hash(req.body.password, 10);
	let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password_hash
    });
	await user.save();

    let token = 'Bearer ' + jwt.sign({ email: user.email }, process.env.JWT_SECRET);

	return res.json({ success: true, token });
}

const getStatus = (req, res) => {
    let user = _.pick(req.user, ["name", "email"]);
    res.json(user);
}

module.exports = {
    getStatus,
    handleUserLogin,
    handleUserSignup,
}