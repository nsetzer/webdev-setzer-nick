module.exports = function (app, model) {
    var winston = require("winston");
    var _website = require('./website.data.server');
    var _message = require('./message.data.server');

    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:wid', findWebsiteById);
    app.put('/api/website/:wid', updateWebsite);
    app.delete('/api/website/:wid', deleteWebsite);
    if (process.env.NODE_ENV === "test") {
        app.get('/api/_test/website', getRandomSite);
    }

    function createWebsite(req, res) {
        model.WebsiteModel
            .createWebsiteForUser(req.params.uid,req.body)
            .then(
                (website) => {res.status(201).json(website)},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function findAllWebsitesForUser(req, res) {
        model.WebsiteModel
            .findAllWebsitesForUser(req.params.uid)
            .then(
                (sites) => {res.status(200).json(sites)},
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findWebsiteById(req, res) {
        model.WebsiteModel
            .findWebsiteById(req.params.wid)
            .then(
                (site) => {
                    if (!site) {
                        res.status(404).json(
                            _message.Error("website not found"));
                    } else {
                        res.status(200).json(site)
                    }
                },
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function updateWebsite(req, res) {

        model.WebsiteModel
            .updateWebsite(req.params.wid,req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deleteWebsite(req, res) {
        if (model.WebsiteModel.deleteWebsite(req.params.wid)) {
            res.status(200).json(_message.Success("OK"));
            return
        }

        res.status(404).send(_message.Error("website not found"))
    }

    function getRandomSite(req, res) {
        model.WebsiteModel
            .find()
            .limit(1)
            .then(
                (sites) => {
                    res.status(200).json(sites[0])
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    winston.info("website endpoints registered");


};