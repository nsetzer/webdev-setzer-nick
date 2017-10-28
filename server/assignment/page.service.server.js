module.exports = function (app, model) {
    var winston = require("winston");
    var _page = require('./page.data.server');
    var _message = require('./message.data.server');

    app.post('/api/website/:wid/page', createPage);
    app.get('/api/website/:wid/page', findAllPagesForWebsite);
    app.get('/api/page/:pid', findPageById);
    app.put('/api/page/:pid', updatePage);
    app.delete('/api/page/:pid', deletePage);

    function createPage(req, res) {
        if (req.body._id || req.body._id==='') {
            delete req.body._id;
        }
        model.PageModel
            .create(req.body)
            .then(
                (page) => {
                    model.WebsiteModel
                        .update( {_id:page.websiteId},
                                 { $push: { pages: page._id } })
                        .then(
                          () => {res.status(201).json(page)},
                          (err) => {
                            console.log(err)
                            res.status(501).send(_message.Error(err))
                          }
                        )
                },
                (err) => {
                    console.log(err)
                    res.status(502).send(_message.Error(err))
                }
            );
    }

    function findAllPagesForWebsite(req, res) {
        model.PageModel
            .find({websiteId:req.params.wid})
            .then(
                (pages) => {res.status(200).json(pages)},
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findPageById(req, res) {
        model.PageModel
            .find({_id:req.params.pid})
            .then(
                (pages) => {
                    if (pages.length===0) {
                        res.status(404).json(
                            _message.Error("website not found"));
                    } else {
                        res.status(200).json(pages[0])
                    }

                },
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    function updatePage(req, res) {
        model.PageModel
            .update({_id:req.params.pid},
                    req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deletePage(req, res) {

        let page = await model.PageModel.find({_id:req.params.pid})

        if (page) {
            await model.PageModel.remove({_id:req.params.pid})
            await model.WebsiteModel
                    .update({_id:page.websiteId},
                            { $pull: { pages: req.params.pid } });
            res.status(200).json(_message.Success("OK"));
            return
        }

        res.status(404).send(_message.Error("website not found"))
    }

    winston.info("page endpoints registered");

};