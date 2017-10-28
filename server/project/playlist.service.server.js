module.exports = function (app, model) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');
    var _song = require('./song.data.server');
    var _message = require('../assignment/message.data.server');

    var multer = require('multer'); //
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post('/api/user/:uid/playlist', createPlaylist);
    app.get('/api/user/:uid/playlist', findAllPlaylistsForUser);
    app.get('/api/playlist', findPlaylistsByTerm);
    app.get('/api/playlist/:plid', findPlaylistById);
    app.put('/api/playlist/:plid', updatePlaylist);
    app.get('/api/playlist/:plid/songs', findAllSongssForPlaylist);
    app.delete('/api/playlist/:plid', deletePlaylist);
    app.put('/api/playlist/:plid/append', addSongToPlaylist);
    app.post("/api/upload/audio", upload.single('myFile'), uploadAudio);
    if (process.env.NODE_ENV === "test") {
        app.get('/api/_test/playlist', getRandomPlaylist);
    }

    function createPlaylist(req, res) {
        if (req.body._id || req.body._id==='') {
            delete req.body._id;
        }

        req.body.uid = req.params.uid;

        model.PlaylistModel
            .create(req.body)
            .then(
                (playlist) => {
                    model.UserModel
                        .update( {_id:playlist.uid},
                                 { $push: { playlists: playlist._id } })
                        .then(
                          () => {res.status(201).json(playlist)},
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

    function findAllPlaylistsForUser(req, res) {
        model.PlaylistModel
            .find({uid:req.params.uid})
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
            .find({_id:req.params.plid})
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

        // TODO: convert this to use mongoose search terms
        // some examples:
        // $or:[ {'_id':objId}, {'name':param}]
        // { "name" : { $regex : new RegExp(part,"i");}

        let playlists = await model.PlaylistModel.find();

        var term = req.query.term.toLowerCase();
        var parts = term.split(" ");
        var lists = []
        for (let x = 0; x < playlists.length; x++) {
            let relevance = 0;
            let name = playlists[x].name.toLowerCase();
            let desc = playlists[x].description.toLowerCase();

            for (let y=0; y < parts.length; y++) {
                let part = parts[y]
                if (name.indexOf(part) !== -1 ||
                    desc.indexOf(part) !== -1) {
                    relevance = relevance + 1
                }
            }
            // push a copy of the list if it is relevant
            if (relevance > 0) {
                var lst = playlists[x];
                lst.relevance = relevance
                lists.push(lst)
            }
        }

        if (lists.length == 0) {
            winston.warn("no playlists found for term `" + term + "`")
            res.status(200).json([])
            return
        }

        // sort matching sites by relevance
        lists.sort((a,b)=>(b.relevance - a.relevance));
        lists = lists.slice(0,10);
        winston.info("found " + lists.length + " playlists for term `" + term + "`")
        res.status(200).json(lists)
    }


    function updatePlaylist(req, res) {
        model.PlaylistModel
            .update({_id:req.params.plid},
                    req.body)
            .then(
                () => {res.status(200).json(_message.Success("OK"));},
                (err) => {res.status(500).send(_message.Error(err))}
            );
    }

    async function deletePlaylist(req, res) {
        let playlists = await model.PlaylistModel.find({_id:req.params.plid})

        if (playlists) {
            await model.PlaylistModel.remove({_id:req.params.plid})
            await model.UserModel
                    .update({_id:playlists[0].uid},
                            { $pull: { widgets: req.params.plid } });
            res.status(200).json(_message.Success("OK"));
            return
        }

        res.status(404).send(_message.Error("website not found"))
    }

    function reorder(truth, data) {
        var out = []
        for (let x = 0; x < truth.length; x++) {
            for (let y = 0; y < data.length; y++) {
                if (data[y]._id.equals(truth[x])) {
                    out.push(data.splice(y, 1)[0])
                    break;
                }
            }
        }
        return out;
    }

    async function _findAllSongssForPlaylist(pid) {
        let playlists = await model.PlaylistModel.find({_id:pid})
        if (playlists) {
            let playlist = playlists[0]
            let songs = await model.SongModel
                .find({_id: {$in: playlist.songs}});
            songs = reorder(playlist.songs, songs)
            return songs;
        }
        return [];
    }

    async function findAllSongssForPlaylist(req, res) {
        var items = await _findAllSongssForPlaylist(req.params.plid);
        res.json(items)
    }



    async function _addSongToPlaylist(plid, song) {

        if (song._id || song._id==='') {
            delete song._id;
        }


        let new_song = await model.SongModel.create(song);

        await model.PlaylistModel
            .update(
                {_id:plid},
                { $push: { songs: new_song._id } }
            );

        return true;
    }

    async function addSongToPlaylist(req,res) {
        var song  = req.body;
        var plid = req.params.plid;
        if (await _addSongToPlaylist(plid, song)) {
            res.status(200).json(null);
            return;
        }
        res.status(404).json({message:"Error: playlist not found"})
    }

    async function uploadAudio(req, res) {
        // this should automatically append the song to a given playlist
        var uid = req.body.uid;
        var plid = req.body.plid;
        var url = '/public/uploads/' + req.file.filename;
        var song = _song.Song("upload", url, req.body.description,
                              req.body.title, req.body.artist, "")

        if (await _addSongToPlaylist(plid, song)) {
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


    winston.info("playlist endpoints registered");
};
