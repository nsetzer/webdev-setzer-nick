

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
        if (req.body._id || req.body._id==='') {
            delete req.body._id;
        }

        req.body.pageId = req.params.pid;

        model.WidgetModel
            .create(req.body)
            .then(
                (widget) => {
                    model.PageModel
                        .update( {_id:widget.pageId},
                                 { $push: { widgets: widget._id } })
                        .then(
                          () => {res.status(201).json(widget)},
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

    async function _findAllWidgetsForPage(pid) {
        // TODO: verify order retuned is correct
        let pages = await model.PageModel.find({_id:pid})
        if (pages) {
            let page = pages[0]
            let widgets = await model.WidgetModel
                .find({_id: {$in: page.widgets}});
            return widgets;
        }
        return [];
    }

    async function findAllWidgetsForPage(req, res) {
        var items = await _findAllWidgetsForPage(req.params.pid);
        res.json(items)
    }

    async function _findWidgetById(wgid) {
        var items = await model.WidgetModel.find({_id:req.params.wgid});
        if (items && items.length>0) {
            return items[0]
        }
        return;
    }

    async function findWidgetById(req, res) {
        var widget = await _findWidgetById(req.params.wgid);
        if (widget) {
            res.json(widget);
        } else {
            res.status(404).json(
                _message.Error("widget not found"));
        }
    }

    function updateWidget(req, res) {
        model.WidgetModel
            .update({_id:req.params.wgid},
                    req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deleteWidget(req, res) {
        let widget = await model.WidgetModel.find({_id:req.params.pid})

        if (widget) {
            await model.WidgetModel.remove({_id:req.params.wgid})
            await model.PageModel
                    .update({_id:widget.pageId},
                            { $pull: { widgets: req.params.wgid } });
            res.status(200).json(_message.Success("OK"));
            return
        }

        res.status(404).send(_message.Error("website not found"))
    }

    async function _reorderWidget(pid, from, to) {
        winston.info("pid " + pid + " move " + from + " to " + to);

        let pages = await model.PageModel.find({_id:pid})
        if (pages) {
            let page = pages[0];
            let items = page.widgets;

            if ( from < 0 || from >= items.length) {
                return false;
            }

            if ( to < 0 || to >= items.length) {
                return false;
            }

            var widget = items.splice(from, 1)[0]
            items.splice(to, 0, widget);

            page.widgets = items;

            await model.PageModel.update({_id:pid}, page)
        }

        return true;
    }

    async function reorderWidget(req,res) {
        if (_reorderWidget( req.params.pid, req.query.from, req.query.to)) {
            res.status(200).json(
                _message.Success("OK"));
        } else {
            res.status(400).json(
                _message.Error("widget not found"));
        }
    }

    function uploadImage(req, res) {
        var url = '/public/uploads/' + req.file.filename;
        res.status(200).json({"url":url});
    }

    winston.info("widget endpoints registered");
};

