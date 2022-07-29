// Passport is authentication middleware for Node. js. 
// Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
// A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
    "login",
    new localStrategy({
            usernameField: "email",
            passwordField: "password",
        },
        async(email, password, done) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    return done(null, false, { message: "User Not Found" });
                }

                const validate = await user.isValidPassword(password);
                if (!validate) {
                    return done(null, false, { message: "Wrong Password" });
                }
                return done(null, user, { message: "Logged In Successfully" });
            } catch (error) {
                return done(error);
            }
        }
    )
);