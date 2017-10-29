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
        if (req.body._id || req.body._id==='') {
            delete req.body._id;
        }

        model.UserModel
            .find({username: req.body.username})
            .then(
                (users) => {
                    if (users.length===0) {
                      model.UserModel
                        .create(req.body)
                        .then(
                            (user) => {res.status(201).json(user)},
                            (err) => {
                                res.status(500).send(_message.Error(err))}
                        );
                    } else {
                        res.status(400).send(_message.Error("user exists"))
                    }
                },
                (err) => {res.status(500).send(_message.Error(err))}
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

    function findUserByUsername(res, username) {
        model.UserModel
            .find({username: username})
            .then(
                (users) => {
                    if (users.length===0) {
                        res.status(404).send(
                            _message.Error("user not found"))
                    } else {
                        res.status(200).json(users[0])
                    }
                },
                (err) => {
                    console.log("no user found")
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findUserByCredentials(res, username,password) {
        model.UserModel
            .find({username: username, password:password})
            .then(
                (users) => {
                    if (users.length===0) {
                        res.status(404).send(
                            _message.Error('User `' + username +
                            '` not found for given credentials'))
                    } else {
                        res.status(200).json(users[0])
                    }
                },
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function findUserById(req, res) {
        let users = await model.UserModel.find({_id: req.params.uid})

        if (users.length === 0) {

            let users = await model.UserModel.find()
            console.log(req.params.uid)
            console.log(users.map(x=>x._id))

            res.status(404).send(
                _message.Error("user not found"))
        }

        res.status(200).json(users[0])
    }

    function updateUser(req, res) {

        model.UserModel
            .update({_id: req.params.uid},req.body)
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
            .remove({_id: req.params.uid})
            .then(
                () => {res.status(200).json(_message.Success("OK"))},
                (err) => {res.status(404).send(
                    _message.Error('User not found'))}
            );
    }

    winston.info("user endpoints registered");
};
