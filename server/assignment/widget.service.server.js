

module.exports = (app, model) => {

    var winston = require("winston");
    var _widget = require('./widget.data.server');
    var _message = require('./message.data.server');

    var multer = require('multer'); //
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post('/api/page/:pid/widget', createWidget);
    app.get('/api/page/:pid/widget', findAllWidgetsForPage);
    app.put('/api/page/:pid/widget', reorderWidget)
    app.get('/api/widget/:wgid', findWidgetById);
    app.put('/api/widget/:wgid', updateWidget);
    app.delete('/api/widget/:wgid', deleteWidget);
    app.post("/api/upload", upload.single('myFile'), uploadImage);

    function createWidget(req, res) {
        model.WidgetModel
            .createWidget(req.params.pid, req.body)
            .then(
                (widget) => {res.status(201).json(widget)},
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            )
    }

    async function findAllWidgetsForPage(req, res) {
        var items = await model.WidgetModel
            .findAllWidgetsForPage(req.params.pid);
        res.json(items)
    }

    async function findWidgetById(req, res) {
        var widget = await model.WidgetModel.findWidgetById(req.params.wgid);
        if (widget) {
            res.json(widget);
        } else {
            res.status(404).json(
                _message.Error("widget not found"));
        }
    }

    function updateWidget(req, res) {
        model.WidgetModel
            .updateWidget(req.params.wgid,req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deleteWidget(req, res) {
        if (await model.WidgetModel.deleteWidget(req.params.wgid)) {
            res.status(200).json(_message.Success("OK"));
            return
        }
        res.status(404).send(_message.Error("website not found"))
    }

    async function reorderWidget(req,res) {
        let pid = req.params.pid
        let from = req.query.from
        let to = req.query.to
        winston.info("pid " + pid + " move " + from + " to " + to);
        if (await model.WidgetModel.reorderWidget(pid, from, to)) {
            res.status(200).json(
                _message.Success("OK"));
        } else {
            res.status(404).json(
                _message.Error("page not found"));
        }
    }

    function uploadImage(req, res) {
        var url = '/public/uploads/' + req.file.filename;
        res.status(200).json({"url":url});
    }

    winston.info("widget endpoints registered");
};

