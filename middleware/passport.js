// Import necessary modules
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {User} = require("../models/user");

// Define options for JWT strategy
module.exports = (passport) => {
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
};

// Define JWT strategy
const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
        const user = await User.query().findById(payload.id);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
});

// Use JWT strategy with Passport
passport.use(jwtStrategy);

// Export middleware for authenticating with JWT
}
