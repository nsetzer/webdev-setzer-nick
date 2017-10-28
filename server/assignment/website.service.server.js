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

    async function deleteWebsite(req, res) {

        let website = await model.WebsiteModel.find({_id:req.params.wid})

        if (website) {
            await model.WebsiteModel.remove({_id:req.params.wid})
            await model.UserModel
                    .update({_id:website.developerId},
                            { $pull: { websites: req.params.wid } });
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