module.exports = function (app, model) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');
    var _message = require('../assignment/message.data.server');

    queues = []

    app.put('/api/user/:uid/queue', setSongQueue);
    app.get('/api/user/:uid/queue', getSongQueue);
    app.get('/api/user/:uid/queue/head', getSongQueueHead);
    app.delete('/api/user/:uid/queue/head', deleteSongQueueHead);

    function setSongQueue(req, res) {
        var playlist = req.body;
        var queue = {
            uid: req.params.uid,
            songs: playlist.songs
        };
        model.QueueModel
            .update({uid:req.params.uid}, queue, {upsert:true})
            .then(
                () => {res.status(200).json(queue)},
                (err) => {res.status(501).send(_message.Error(err))}
            );
    }

    function getSongQueue(req, res) {

        model.QueueModel
            .find({uid: req.params.uid})
            .then(
                (queues) => {
                    if (queues.length===0) {
                        // return the default, empty queue, when not found
                        res.status(200).json({
                            uid: req.params.uid,
                            songs: []
                        });
                    } else {
                        // return the queue that was found
                        res.status(200).json(queues[0])
                    }
                },
                (err) => {res.status(502).send(_message.Error(err))}
            );
    }

    function _getUrl(song) {
        if (song.videoId.startsWith("/public")) {
            return song.videoId;
        } else {
            return "/api/youtube/" + song.videoId
        }
    }

    async function getSongQueueHead(req, res) {

        var queues = await model.QueueModel.find({uid:req.params.uid});

        if (queues && queues.length > 0) {
            let songid = queues[0].songs[0];
            let songs = await model.SongModel.find({_id:songid})
            let song = songs[0]

            song.url = _getUrl(song)
            song.length = queues[0].length;
            res.status(200).json(song)

            return;
        }
        // default return a null object
        res.status(200).json(null)
    }

    async function deleteSongQueueHead(req, res) {

        var queues = await model.QueueModel.find({uid:req.params.uid});

        if (queues && queues.length > 0) {
            let songid = queues[0].songs[0];
            let songs = await model.SongModel.find({_id:songid})
            let song = songs[0]

            song.url = _getUrl(song)
            song.length = queues[0].length;

            // remove the song
            await model.QueueModel.update(
                {uid:req.params.uid},
                { $pop: { songs: -1 } }
            );

            res.status(200).json(song)
            return;
        }
        // default return a null object
        res.status(200).json(null)
    }


    winston.info("song queue endpoints registered");
};
