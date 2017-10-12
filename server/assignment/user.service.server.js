module.exports = function (app) {
    var winston = require("winston");

    app.post('/api/user', createUser);
    app.get('/api/user', getUser);
    app.put('/api/user', updateUser);
    app.delete('/api/user', deleteUser);

    function createUser(req, res) {

    }

    function getUser(req, res) {

    }

    function findUserByUsername(username) {

    }

    function findUserByCredentials(username,password) {

    }

    function findUserById(userid) {

    }

    function updateUser(req, res) {

    }

    function deleteUser(req, res) {

    }

    winston.info("user endpoints registered");
};
