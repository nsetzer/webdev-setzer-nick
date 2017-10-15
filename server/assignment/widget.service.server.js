

module.exports = (app) => {

    var winston = require("winston");

    var _widget = require('./widget.data.server');

    var widgets = _widget.getDefaultWidgets();
    var nextId = 1000;

    app.post('/api/page/:pid/widget', createWidget);
    app.get('/api/page/:pid/widget', findAllWidgetsForPage);
    app.get('/api/widget/:wgid', findWidgetById);
    app.put('/api/widget/:wgid', updateWidget);
    app.delete('/api/widget/:wgid', deleteWidget);

    function createWidget(req, res) {
        var widget = req.body;
        widget._id = "" + nextId
        nextId = nextId + 1;
        widget.pageId = req.params.pid
        widgets.push( widget );
        res.status(201).json(widget)
    }

    function findAllWidgetsForPage(req, res) {
        var items = [];
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x].pageId === req.params.pid) {
                items.push(widgets[x]);
            }
        }
        res.json(items)
    }

    function findWidgetById(req, res) {
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === req.params.wgid) {
                res.json(widgets[x]);
                return;
            }
        }
        res.status(404).send("Error: widget not found")
    }

    function updateWidget(req, res) {
        var widget  = req.body;
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === req.params.wgid) {
                widget._id = widgets[x]._id;
                widgets[x] = widget;
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: widget not found")
    }

    function deleteWidget(req, res) {
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === req.params.wgid) {
                widgets.splice(x,1);
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: widget not found")
    }

    winston.info("widget endpoints registered");
};

