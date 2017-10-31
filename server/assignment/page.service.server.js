module.exports = function (app, model) {
    var winston = require("winston");
    var _page = require('./page.data.server');
    var _message = require('./message.data.server');

    app.post('/api/website/:wid/page', createPage);
    app.get('/api/website/:wid/page', findAllPagesForWebsite);
    app.get('/api/page/:pid', findPageById);
    app.put('/api/page/:pid', updatePage);
    app.delete('/api/page/:pid', deletePage);
    if (process.env.NODE_ENV === "test") {
        app.get('/api/_test/page', getRandomPage);
    }

    function createPage(req, res) {

        model.PageModel
            .createPage(req.params.wid, req.body)
            .then(
                (page) => {
                    model.WebsiteModel
                        .update( {_id:page.websiteId},
                                 { $push: { pages: page._id } })
                        .then(
                          () => {res.status(201).json(page)},
                          (err) => {
                            res.status(500).send(_message.Error(err))
                          }
                        )
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findAllPagesForWebsite(req, res) {
        model.PageModel
            .findAllPagesForWebsite(req.params.wid)
            .then(
                (pages) => {res.status(200).json(pages)},
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findPageById(req, res) {
        model.PageModel
            .findPageById(req.params.pid)
            .then(
                (page) => {
                    if (!page) {
                        res.status(404).json(
                            _message.Error("page not found"));
                    } else {
                        res.status(200).json(page)
                    }
                },
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function updatePage(req, res) {
        model.PageModel
            .updatePage(req.params.pid,req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deletePage(req, res) {

        let page = await model.PageModel.findPageById(req.params.pid)
        console.log(page)

        if (page) {
            await model.PageModel.deletePage(req.params.pid)
            // TODO: create model API for this update function
            await model.WebsiteModel
                    .update({_id:page.websiteId},
                            { $pull: { pages: req.params.pid } });
            res.status(200).json(_message.Success("OK"));
            return
        }

        res.status(404).send(_message.Error("website not found"))
    }

    function getRandomPage(req, res) {
        model.PageModel
            .find()
            .limit(1)
            .then(
                (pages) => {
                    res.status(200).json(pages[0])
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    winston.info("page endpoints registered");

};