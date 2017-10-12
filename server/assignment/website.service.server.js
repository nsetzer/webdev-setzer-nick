module.exports = function (app) {
    var winston = require("winston");

    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:wid', findWebsiteById);
    app.put('/api/website/:wid', updateWebsite);
    app.delete('/api/website/:wid', deleteWebsite);

    function createWebsite(req, res) {

    }

    function findAllWebsitesForUser(req, res) {

    }

    function findWebsiteById(req, res) {

    }

    function updateWebsite(req, res) {

    }

    function deleteWebsite(req, res) {

    }

    winston.info("website endpoints registered");


};