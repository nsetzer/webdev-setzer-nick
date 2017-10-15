

module.exports = (app) => {

    var winston = require("winston");

    var _widget = require('./widget.data.server');

    var widgets = _widget.getDefaultWidgets();
    var nextId = 1234;

    app.post('/api/page/:pid/widget', createWidget);
    app.get('/api/page/:pid/widget', findAllWidgetsForPage);
    app.get('/api/widget/:wgid', findWidgetById);
    app.put('/api/widget/:wgid', updateWidget);
    app.delete('/api/widget/:wgid', deleteWidget);

    function createWidget(req, res) {
        var page = req.body;
        page._id = req.param.wgid
        nextId = nextId + 1;
        pages.push( page );
        res.status(201).json(page)
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

