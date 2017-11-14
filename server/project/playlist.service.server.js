module.exports = function (app, model) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');
    var _song = require('./song.data.server');
    var _message = require('../assignment/message.data.server');

    var multer = require('multer'); //
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post('/api/user/:uid/playlist', createPlaylist);
    app.get('/api/user/:uid/playlist', findAllPlaylistsForUser);
    app.put('/api/song/:sid', updateSong);
    app.get('/api/playlist', findPlaylistsByTerm);
    app.get('/api/playlist/:plid', findPlaylistById);
    app.put('/api/playlist/:plid', updatePlaylist);
    app.get('/api/playlist/:plid/songs', findAllSongsForPlaylist);
    app.get('/api/playlist-contains/:videoId', findPlaylistsContainingSong);
    app.delete('/api/playlist/:plid', deletePlaylist);
    app.put('/api/playlist/:plid/append', addSongToPlaylist);
    app.delete('/api/playlist/:plid/:idx', removeSongFromPlaylist);
    app.post("/api/upload/audio", upload.single('myFile'), uploadAudio);
    if (process.env.NODE_ENV === "test") {
        app.get('/api/_test/playlist', getRandomPlaylist);
    }

    function createPlaylist(req, res) {
        model.PlaylistModel
            .createPlaylist(req.params.uid,req.body)
            .then(
              (playlist) => {res.status(201).json(playlist)},
              (err) => {
                res.status(500).send(_message.Error(err))
              }
            )
    }

    function findAllPlaylistsForUser(req, res) {
        model.PlaylistModel
            .findAllPlaylistsForUser(req.params.uid)
            .then(
                (lists) => {
                    res.status(200).json(lists)
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    function findPlaylistById(req, res) {
        model.PlaylistModel
            .findPlaylistById(req.params.plid)
            .then(
                (lists) => {
                    if (lists.length === 0) {
                        res.status(404).send(
                            _message.Error("playlist not found"))
                    } else {
                        res.status(200).json(lists[0])
                    }
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }

            );
    }

    async function findPlaylistsByTerm(req, res) {

        var lists = await model.PlaylistModel
            .findPlaylistsByTerm(req.query.term)

        if (lists.length == 0) {
            winston.warn("no playlists found for term `" + req.query.term + "`")
            res.status(200).json([])
            return
        }

        winston.info("found " + lists.length + " playlists for term `" + req.query.term + "`")
        res.status(200).json(lists)
    }


    function updatePlaylist(req, res) {
        model.PlaylistModel
            .updatePlaylist(req.params.plid,req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deletePlaylist(req, res) {
        if (await model.PlaylistModel.deletePlaylist(req.params.plid)) {
            res.status(200).json(_message.Success("OK"));
            return
        }
        res.status(404).send(_message.Error("website not found"))
    }

    async function findAllSongsForPlaylist(req, res) {
        var items = await model.PlaylistModel
            .findAllSongsForPlaylist(req.params.plid);
        res.json(items)
    }

    async function addSongToPlaylist(req,res) {
        var song  = req.body;
        var plid = req.params.plid;
        if (await model.PlaylistModel.addSongToPlaylist(plid, song)) {
            res.status(200).json(null);
            return;
        }
        res.status(404).json({message:"Error: playlist not found"})
    }

    async function removeSongFromPlaylist(req, res) {
        var plid = req.params.plid;
        var idx  = req.params.idx;

        if (await model.PlaylistModel.removeSongFromPlaylist(plid,idx)) {
            res.status(200).json(null);
        } else {
            res.status(404).json({message:"playlist not found"})
        }
    }

    async function updateSong(req,res) {
        var song = req.body;
        model.SongModel
            .updateSong(req.params.sid,song)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function uploadAudio(req, res) {
        // this should automatically append the song to a given playlist
        var uid = req.body.uid;
        var plid = req.body.plid;
        var url = '/public/uploads/' + req.file.filename;
        var song = _song.Song("upload", url, req.body.description,
                              req.body.title, req.body.artist, "")

        if (await model.PlaylistModel.addSongToPlaylist(plid, song)) {
            res.status(200).json(song);

            return;
        }

        res.status(404).json({message:"Error: playlist not found"})
    }

    function getRandomPlaylist(req, res) {
        model.PlaylistModel
            .find()
            .limit(1)
            .then(
                (lists) => {
                    res.status(200).json(lists[0])
                },
                (err) => {
                    res.status(500).send(_message.Error(err))
                }
            );
    }

    async function findPlaylistsContainingSong(req, res) {
        let lists = await model.PlaylistModel.findPlaylistsContainingSong(req.params.videoId)

        winston.info("found " + lists.lengths + " lists containing " + req.params.videoId);
        res.status(200).json(lists)
    }


    winston.info("playlist endpoints registered");
};
