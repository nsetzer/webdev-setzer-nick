module.exports = function (app) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');

    queues = []

    app.put('/api/user/:uid/queue', setSongQueue);
    app.get('/api/user/:uid/queue', getSongQueue);
    app.get('/api/user/:uid/queue/head', getSongQueueHead);
    app.delete('/api/user/:uid/queue/head', deleteSongQueueHead);

    function setSongQueue(req, res) {
        var playlist = req.body;
        playlist.uid = req.params.uid;
        for (let x = 0; x < queues.length; x++) {
          if (queues[x].uid === playlist.uid) {
            queues[x] = playlist
            res.status(200).json(playlist)
            return;
          }
        }
        queues.push( playlist );
        res.status(200).json(playlist)
    }

    function getSongQueue(req, res) {
        for (let x = 0; x < queues.length; x++) {
          if (queues[x].uid === req.params.uid) {
            res.status(200).json(queues[x])
            return;
          }
        }
        // default always return an empty list
        var playlist = _playlist.createDefaultPlaylist(req.params.uid,"");
        res.status(200).json(playlist);
    }

    function _getUrl(song) {
        if (song.videoId.startsWith("/public")) {
            return song.videoId;
        } else {
            return "/api/youtube/" + song.videoId
        }
    }

    function getSongQueueHead(req, res) {
        for (let x = 0; x < queues.length; x++) {
          if (queues[x].uid === req.params.uid) {
            // return the head of the queue
            if (queues[x].songs.length > 0) {
                var song = queues[x].songs[0]
                song.url = _getUrl(song)
                song.length = queues[x].length
                res.status(200).json(song)
                return;
            }
          }
        }
        // default return a null object
        res.status(200).json(null)
    }

    function deleteSongQueueHead(req, res) {
        for (let x = 0; x < queues.length; x++) {
          if (queues[x].uid === req.params.uid) {
            // remove the song at index 0
            queues[x].songs.splice(0,1);
            // return the new head of the queue
            if (queues[x].songs.length > 0) {
                var song = queues[x].songs[0]
                song.url = _getUrl(song)
                song.length = queues[x].length
                res.status(200).json(song)
                return;
            }
          }
        }
        // default return a null object
        res.status(200).json(null)
    }


    winston.info("song queue endpoints registered");
};
