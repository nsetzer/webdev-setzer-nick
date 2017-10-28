module.exports = function (app, model) {
    var winston = require("winston");
    var _website = require('./website.data.server');
    var _message = require('./message.data.server');

    app.post('/api/user/:uid/website', createWebsite);
    app.get('/api/user/:uid/website', findAllWebsitesForUser);
    app.get('/api/website/:wid', findWebsiteById);
    app.put('/api/website/:wid', updateWebsite);
    app.delete('/api/website/:wid', deleteWebsite);

    function createWebsite(req, res) {
        // create a website and append the id to the users website list
        if (req.body._id || req.body._id==='') {
            delete req.body._id;
        }
        model.WebsiteModel
            .create(req.body)
            .then(
                (website) => {
                    model.UserModel
                        .update( {_id:website.developerId},
                                 { $push: { websites: website._id } })
                        .then(
                          () => {res.status(201).json(website)},
                          (err) => {res.status(500).send(_message.Error(err))}
                        )
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findAllWebsitesForUser(req, res) {
        model.WebsiteModel
            .find({developerId:req.params.uid})
            .then(
                (sites) => {res.status(200).json(sites)},
                (err) => {
                    console.log(err)
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findWebsiteById(req, res) {
        model.WebsiteModel
            .find({_id:req.params.wid})
            .then(
                (sites) => {
                    if (sites.length===0) {
                        res.status(404).json(
                            _message.Error("website not found"));
                    } else {
                        res.status(200).json(sites[0])
                    }

                },
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function updateWebsite(req, res) {

        model.WebsiteModel
            .update({_id:req.params.wid},
                    req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function deleteWebsite(req, res) {
        model.WebsiteModel
            .remove({_id:req.params.wid})
            .then(
                (website) => {
                    model.UserModel
                        .update( {_id:website.developerId},
                                 { $pull: { websites: req.params.wid } })
                        .then(
                          () => {res.status(200).json(_message.Success("OK"));},
                          (err) => {res.status(500).send(_message.Error(err))}
                        )
                },
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    winston.info("website endpoints registered");


};