module.exports = function (app) {
    var winston = require("winston");
    var _user = require('./user.data.server');

    users = _user.getDefaultUsers();

    app.post('/api/user', createUser);
    app.get('/api/user', getUser);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    function createUser(req, res) {

        var user = req.body;

        user._id = "000";
        users.push( user );

        res.status(201).json('')
    }

    function getUser(req, res) {

        var username = req.query.username;
        var password = req.query.password;

        if (username && password) {
            findUserByCredentials(res, username,password)
        } else if (username) {
            findUserByUsername(res, username)
        } else {
            res.status(400).json('')
        }
    }

    function findUserByUsername(res, username) {
        for (let x = 0; x < users.length; x++) {
          if (users[x].username === username) {
            res.json(users[x]);
            return;
          }
        }

        res.status(400).json('')
    }

    function findUserByCredentials(res, username,password) {
        for (let x = 0; x < users.length; x++) {
          if (users[x].username === username &&
              users[x].password === password) {
            res.json(users[x]);
            return;
          }
        }

        res.status(400).json('')
    }

    function findUserById(req, res) {

    }

    function updateUser(req, res) {

    }

    function deleteUser(req, res) {

    }

    winston.info("user endpoints registered (" + users.length + " users)");
};
