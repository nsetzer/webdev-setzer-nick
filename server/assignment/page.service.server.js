module.exports = function (app) {
    var winston = require("winston");

    app.post('/api/website/:wid/page', createPage);
    app.get('/api/website/:wid/page', findAllPagesForWebsite);
    app.get('/api/page/:pid', findPageById);
    app.put('/api/page/:pid', updatePage);
    app.delete('/api/page/:pid', deletePage);

    function createPage(req, res) {

    }

    function findAllPagesForWebsite(req, res) {

    }

    function findPageById(req, res) {

    }

    function updatePage(req, res) {

    }

    function deletePage(req, res) {

    }

    winston.info("page endpoints registered");

};