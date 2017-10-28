module.exports = function (app, model) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');
    var _song = require('./song.data.server');

    var multer = require('multer'); //
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    app.post('/api/user/:uid/playlist', createPlaylist);
    app.get('/api/user/:uid/playlist', findAllPlaylistsForUser);
    app.get('/api/playlist', findPlaylistsByTerm);
    app.get('/api/playlist/:plid', findPlaylistById);
    app.put('/api/playlist/:plid', updatePlaylist);
    app.delete('/api/playlist/:plid', deletePlaylist);
    app.put('/api/playlist/:plid/append', addSongToPlaylist);
    app.post("/api/upload/audio", upload.single('myFile'), uploadAudio);

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
            .find({uid:uid})
            .then(
                (lists) => {res.status(200).json(lists)},
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
                var tmp = _playlist.scrub(lst)
                tmp.relevance = relevance
                lists.push(tmp)
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

    async function _addSongToPlaylist(plid, song) {

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


    winston.info("playlist endpoints registered");
};
