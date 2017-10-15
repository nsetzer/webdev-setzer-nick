module.exports = function (app) {
    var winston = require("winston");
    var _website = require('./website.data.server');

    websites = _website.getDefaultWebsites();
    nextId = 1000;

    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:wid', findWebsiteById);
    app.put('/api/website/:wid', updateWebsite);
    app.delete('/api/website/:wid', deleteWebsite);

    function createWebsite(req, res) {
        var website = req.body;
        website._id = "" + nextId;
        website.developerId = req.params.uid;
        nextId = nextId + 1;
        websites.push( website );
        res.status(201).json(website)
    }

    function findAllWebsitesForUser(req, res) {
        var sites = [];
        for (let x = 0; x < websites.length; x++) {
            if (websites[x].developerId === req.params.uid) {
                sites.push(websites[x]);
            }
        }
        res.json(sites)
    }

    function findWebsiteById(req, res) {
        for (let x = 0; x < websites.length; x++) {
            if (websites[x]._id === req.params.wid) {
                res.json(websites[x]);
                return;
            }
        }

        res.status(404).send("Error: website not found")
    }

    function updateWebsite(req, res) {
        var website  = req.body;
        for (let x = 0; x < websites.length; x++) {
            if (websites[x]._id === req.params.wid) {
                website._id = websites[x]._id;
                websites[x] = website;
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: website not found")
    }

    function deleteWebsite(req, res) {
        for (let x = 0; x < websites.length; x++) {
            if (websites[x]._id === req.params.wid) {
                websites.splice(x,1);
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: website not found")
    }

    winston.info("website endpoints registered");


};