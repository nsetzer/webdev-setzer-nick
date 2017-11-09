module.exports = function (app, model) {
    var winston = require("winston");
    var _user = require('./user.data.server');
    var _message = require('./message.data.server');
    var _passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;

    var facebookConfig = {
        clientID     : process.env.FACEBOOK_CLIENTID,
        clientSecret : process.env.FACEBOOK_SECRET,
        callbackURL  : process.env.FACEBOOK_CALLBACK_URL
    };

    console.log(facebookConfig);

    _passport.deserializeUser(deserializeUser);
    _passport.serializeUser(serializeUser);
    _passport.use(new LocalStrategy(localStrategy));
    _passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

    app.post('/api/user', createUser);
    app.get('/api/user', getUser);
    app.get('/api/user/find', getUsers);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
    app.post  ('/api/login', _passport.authenticate('local'), login);
    app.post  ('/api/logout', logout);
    app.post  ('/api/register', register);
    app.get   ('/api/loggedin', loggedin);

    app.get ('/api/facebook', _passport.authenticate('facebook', { scope : 'email' }));
    app.get ('/api/facebook/callback',
             _passport.authenticate('facebook',
             { successRedirect: '/user/123',
               failureRedirect: '/'}
    ));

    function createUser(req, res) {
        let user = req.body;
        model.UserModel
            .createUser(user)
            .then(
                (user) => {
                    res.status(201).json(user)
                },
                (err) => {
                    res.status(400).send(_message.Error(err))}
            );
    }

    function getUsers(req,res) {
        var username = req.query.username;
        // TODO allow wild card match search
        // e.g. username==='*' -> all users
        model.UserModel
            .find()
            .then(
                (users) => {res.status(200).json(users)},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function getUser(req, res) {

        var username = req.query.username;
        var password = req.query.password;

        if (username && password) {
            findUserByCredentials(res, username,password)
        } else if (username) {
            findUserByUsername(res, username)
        } else {
            res.status(400).json(
                _message.Error('missing query parameters'));
        }
    }

    async function findUserByUsername(res, username) {
        let user;
        try {
            user = await model.UserModel
                .findUserByUsername(username)
        } catch (err) {
            res.status(500).send(
                _message.Error(err))
        }

        if (user) {
            res.status(200).json(user)
            return
        }

        res.status(404).send(
            _message.Error("user not found"))
    }

    async function findUserByCredentials(res, username,password) {
        let user;
        try {
            user = await model.UserModel
                .findUserByCredentials(username, password)
        } catch (err) {
            winston.error(err)
            res.status(500).send(
                _message.Error(err))
            return
        }

        if (user) {
            res.status(200).json(user)
            return
        }

        res.status(404).send(
            _message.Error("user not found"))
    }

    async function findUserById(req, res) {
        let user;
        try {
            user = await model.UserModel
                .findUserById(req.params.uid)
        } catch (err) {
            res.status(500).send(
                _message.Error(err))
        }

        if (user) {
            res.status(200).json(user)
            return
        }

        res.status(404).send(
            _message.Error("user not found"))
    }

    function updateUser(req, res) {

        model.UserModel
            .updateUser(req.params.uid,req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"))},
                (err) => {
                    res.status(404).send(
                    _message.Error('User not found'))
                }
            );
    }

    function deleteUser(req, res) {
        model.UserModel
            .deleteUser(req.params.uid)
            .then(
                () => {res.status(200).json(_message.Success("OK"))},
                (err) => {res.status(404).send(
                    _message.Error('User not found'))}
            );
    }


    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        model.UserModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
        }

    function localStrategy(username, password, done) {
        model.UserModel
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if(user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    async function facebookStrategy(token, refreshToken, profile, done) {
        console.log(profile)
        let user = await model.UserModel
                       .fisndOrCreateUserByFacebookProfile(profile.id);

        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req,res) {
        req.logout();
        req.user=null;
        req.session.destroy(function (err) {
            res.send(_message.Success('success'));
            console.log("on log out")
        });
    }

    function register (req, res) {
        var user = req.body;
        model.UserModel
            .createUser(user)
            .then(
                (user) => {
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                res.status(409).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    } else {
                        res.status(400).send(null);
                    }
                }
            );
    }

    function loggedin(req, res) {
        console.log("is authed:? " + req.isAuthenticated() )
        console.log(req.user)
        res.status(200).json(req.isAuthenticated() ? req.user : null);
    }

    winston.info("user endpoints registered");
};
