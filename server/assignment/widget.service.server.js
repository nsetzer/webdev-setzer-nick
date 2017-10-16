

module.exports = (app) => {

    var winston = require("winston");
    var _widget = require('./widget.data.server');

    var widgets = _widget.getDefaultWidgets();
    var nextId = 1000;

    var multer = require('multer'); //
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post('/api/page/:pid/widget', createWidget);
    app.get('/api/page/:pid/widget', findAllWidgetsForPage);
    app.get('/api/widget/:wgid', findWidgetById);
    app.put('/api/widget/:wgid', updateWidget);
    app.delete('/api/widget/:wgid', deleteWidget);
    app.post("/api/upload", upload.single('myFile'), uploadImage);

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

    function _findWidgetById(wgid) {
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === wgid) {
                return widgets[x];
            }
        }
        return;
    }

    function findWidgetById(req, res) {
        var widget = _findWidgetById(req.params.wgid);
        if (widget) {
            res.json(widget);
        } else {
            res.status(404).send("Error: widget not found")
        }
    }

    function _updateWidget(wgid, widget) {
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === wgid) {
                widget._id = widgets[x]._id;
                widgets[x] = widget;
                return true;
            }
        }
        return false;
    }

    function updateWidget(req, res) {
        if (_updateWidget(req.params.wgid, req.body)) {
            res.status(200).send("OK");
        } else {
            res.status(404).send("Error: widget not found")
        }
    }

    function deleteWidget(req, res) {
        winston.info("delete widget " + req.params.wgid);
        for (let x = 0; x < widgets.length; x++) {
            if (widgets[x]._id === req.params.wgid) {
                widgets.splice(x,1);
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: widget not found")
    }

    function uploadImage(req, res) {

        var userId    = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId    = req.body.pageId;
        var widgetId  = req.body.widgetId;

        var myFile    = req.file;

        var originalname  = myFile.originalname; // file name on user's computer
        var filename      = myFile.filename;     // new file name in upload folder
        var path          = myFile.path;         // full path of uploaded file
        var destination   = myFile.destination;  // folder where file is saved to
        var size          = myFile.size;
        var mimetype      = myFile.mimetype;

        widget = _findWidgetById(widgetId);
        widget.url = '/uploads/'+filename;
        _updateWidget(widgetId,widget);

        var callbackUrl = "http://localhost:4200/user/" + userId +
                          "/website/" + websiteId +
                          "/page/" + pageId +
                          "/widget/" + widgetId;

        console.log("originalname: " + originalname);
        console.log("filename    : " + filename);
        console.log("destination : " + destination);
        console.log("widget.url  : " + widget.url);
        console.log(callbackUrl);

        res.redirect(callbackUrl);
    }


    winston.info("widget endpoints registered");
};

