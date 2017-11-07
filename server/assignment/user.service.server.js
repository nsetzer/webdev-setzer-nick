module.exports = function (app, model) {
    var winston = require("winston");
    var _user = require('./user.data.server');
    var _message = require('./message.data.server');

    app.post('/api/user', createUser);
    app.get('/api/user', getUser);
    app.get('/api/user/find', getUsers);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function createUser(req, res) {
        model.UserModel
            .createUser(req.body)
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

    winston.info("user endpoints registered");
};
