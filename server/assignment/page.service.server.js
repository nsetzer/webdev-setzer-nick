module.exports = function (app) {
    var winston = require("winston");
    var _page = require('./page.data.server');

    pages = _page.getDefaultPages();
    nextId = 1000;

    app.post('/api/website/:wid/page', createPage);
    app.get('/api/website/:wid/page', findAllPagesForWebsite);
    app.get('/api/page/:pid', findPageById);
    app.put('/api/page/:pid', updatePage);
    app.delete('/api/page/:pid', deletePage);

    function createPage(req, res) {
        var page = req.body;
        page._id = "" + nextId;
        page.websiteId = req.params.wid;
        nextId = nextId + 1;
        pages.push( page );
        res.status(201).json(page)
    }

    function findAllPagesForWebsite(req, res) {
        var webpages = [];
        for (let x = 0; x < pages.length; x++) {
            if (pages[x].websiteId === req.params.wid) {
                webpages.push(pages[x]);
            }
        }
        res.json(webpages)
    }

    function findPageById(req, res) {
        for (let x = 0; x < pages.length; x++) {
            if (pages[x]._id === req.params.pid) {
                res.json(pages[x]);
                return;
            }
        }
        res.status(404).send("Error: page not found")
    }

    function updatePage(req, res) {
        var page  = req.body;
        for (let x = 0; x < pages.length; x++) {
            if (pages[x]._id === req.params.pid) {
                page._id = pages[x]._id;
                pages[x] = page;
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: page not found")
    }

    function deletePage(req, res) {
        for (let x = 0; x < pages.length; x++) {
            if (pages[x]._id === req.params.pid) {
                pages.splice(x,1);
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: website not found")
    }

    winston.info("page endpoints registered");

};