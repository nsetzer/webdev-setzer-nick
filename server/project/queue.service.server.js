module.exports = function (app, model) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');
    var _message = require('../assignment/message.data.server');

    app.put('/api/user/:uid/queue', setSongQueue);
    app.get('/api/user/:uid/queue', getSongQueue);
    app.get('/api/user/:uid/queue/head', getSongQueueHead);
    app.delete('/api/user/:uid/queue/head', deleteSongQueueHead);

    function setSongQueue(req, res) {
        model.QueueModel.setQueue(req.params.uid, req.body.songs)
            .then(
                (queue) => {
                    res.status(200).json(queue)
                },
                (err) => {
                    res.status(501).send(_message.Error(err))
                }
            );
    }

    function getSongQueue(req, res) {

        model.QueueModel
            .getQueue(req.params.uid)
            .then(
                (queue) => {
                    res.status(200).json(queue)
                },
                (err) => {
                    res.status(502).send(_message.Error(err))
                }
            );
    }

    async function getSongQueueHead(req, res) {
        song = await model.QueueModel.getQueueHead(req.params.uid)
        // default return a null object
        res.status(200).json(song)
    }

    async function deleteSongQueueHead(req, res) {
        song = await model.QueueModel.deleteQueueHead(req.params.uid)
        // default return a null object
        res.status(200).json(song)
    }


    winston.info("song queue endpoints registered");
};
