module.exports = function (app, model) {
    var winston = require("winston");
    var _user = require('./user.data.server');
    var _message = require('./message.data.server');

    users = _user.getDefaultUsers();
    nextId = 1000;

    app.post('/api/user', createUser);
    app.get('/api/user', getUser);
    app.get('/api/user/find', getUsers);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function createUser(req, res) {

        var user = req.body;

        for (let x = 0; x < users.length; x++) {
          if (users[x].username === user.username) {
            res.status(400).json(
                _message.Error("User already exists."));
            return;
          }
        }

        user._id = "" + nextId;
        nextId = nextId + 1;
        users.push( user );
        res.status(201).json(user)
    }

    function getUsers(req,res) {
        var username = req.query.username;
        res.status(200).json(users);
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
        for (let x = 0; x < users.length; x++) {
          if (users[x].username === username) {
            res.json(users[x]);
            return;
          }
        }

        res.status(400).json(
            _message.Error('User `' + username + '`not found by name'));
    }

    function findUserByCredentials(res, username,password) {
        for (let x = 0; x < users.length; x++) {
          if (users[x].username === username &&
              users[x].password === password) {
            res.json(users[x]);
            return;
          }
        }

        res.status(404).json(
            _message.Error('User `' + username +
                '` not found for given credentials'));
    }

    function findUserById(req, res) {
        for (let x = 0; x < users.length; x++) {
          if (users[x]._id === req.params.uid) {
            res.json(users[x]);
            return;
          }
        }

        res.status(404).json(
            _message.Error('Error: user not found'));
    }

    function updateUser(req, res) {

        var user = req.body;
        for (let x = 0; x < users.length; x++) {
          if (users[x]._id === req.params.uid) {
            user._id = req.params.uid;
            users[x] = user;
            res.status(200).json(
                _message.Success("OK"));
            return;
          }
        }

        res.status(404).json(
            _message.Error('Error: user not found'));
    }

    function deleteUser(req, res) {
        for (let x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === req.params.uid) {
                this.users.splice(x, 1)
                res.status(200).json(
                _message.Success("OK"));
                return;
            }
        }

        res.status(404).json(
            _message.Error('Error: user not found'));
    }

    winston.info("user endpoints registered (" + users.length + " users)");
};
