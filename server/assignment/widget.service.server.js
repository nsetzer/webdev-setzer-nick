

module.exports = function (app) {

    var winston = require("winston");

    app.post('/api/page/:wgid/widget', createWidget);
    app.get('/api/page/:wgid/widget', findAllWidgetsForPage);
    app.get('/api/widget/:wgid', findWidgetById);
    app.put('/api/widget/:wgid', updateWidget);
    app.delete('/api/widget/:wgid', deleteWidget);

    function createWidget(req, res) {

    }

    function findAllWidgetsForPage(req, res) {

    }

    function findWidgetById(req, res) {

    }

    function updateWidget(req, res) {

    }

    function deleteWidget(req, res) {

    }

    winston.info("widget endpoints registered");
};

