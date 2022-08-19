const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models/users');

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

const jwtStrategy = new Strategy(option, (payload, done) => {
    User.findOne({ email: payload.email })
        .then(user => {
            if (user) return done(null, user);
            else done(null, null);
        })
        .catch(err => done(err));
});

passport.use('user', jwtStrategy);

const jwtValidator = passport.authenticate('user', { session: false });

module.exports = {
    passport,
    jwtValidator
}