module.exports = function (app) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');
    var _song = require('./song.data.server');

    var multer = require('multer'); //
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    playlists = _playlist.getDefaultPlaylists();
    nextId = 1000;

    app.post('/api/user/:uid/playlist', createPlaylist);
    app.get('/api/user/:uid/playlist', findAllPlaylistsForUser);
    app.get('/api/playlist', findPlaylistsByTerm);
    app.get('/api/playlist/:plid', findPlaylistById);
    app.put('/api/playlist/:plid', updatePlaylist);
    app.delete('/api/playlist/:plid', deletePlaylist);
    app.put('/api/playlist/:plid/append', addSongToPlaylist);
    app.post("/api/upload/audio", upload.single('myFile'), uploadAudio);

    function createPlaylist(req, res) {
        var playlist = req.body;
        playlist._id = "" + nextId;
        playlist.uid = req.params.uid;
        nextId = nextId + 1;
        playlists.push( playlist );
        winston.info("created playlist " + playlist._id + " for user " + req.params.uid);
        res.status(201).json(playlist)
    }

    function findAllPlaylistsForUser(req, res) {
        var lists = [];
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x].uid === req.params.uid) {
                lists.push(_playlist.scrub(playlists[x]));
            }
        }
        if (lists.length==0) {
            winston.warn("no playlists found for user " + req.params.uid);
        } else {
            winston.info("found " + lists.length + " playlists for user " + req.params.uid);
        }
        res.json(lists)
    }

    function findPlaylistById(req, res) {
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                res.json(playlists[x]);
                winston.info("playlist found with id " + req.params.plid +
                             " contains " + playlists[x].songs.length + " songs");
                return;
            }
        }

        winston.error("no playlist found with id " + req.params.plid);
        res.status(404).json({message:"Error: playlist not found"})
    }

    function findPlaylistsByTerm(req, res) {

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
        var playlist = req.body;
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                playlist._id = playlists[x]._id;
                playlists[x] = playlist;
                res.status(200).json(null);
                winston.info("playlist with id " + req.params.plid +
                             " updated. contains " + playlists[x].songs.length + " songs");
                return;
            }
        }
        winston.error("failed to update playlist" +
                      "no playlist found with id " + req.params.plid);
        res.status(404).json({message:"Error: playlist not found"})
    }

    function deletePlaylist(req, res) {
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                playlists.splice(x,1);
                res.status(200).json(null);
                winston.info("playlist with id " + req.params.plid +
                             " deleted.");
                return;
            }
        }
        winston.error("failed to delete playlist. " +
                      "no playlist found with id " + req.params.plid);
        res.status(404).json({message:"Error: playlist not found"})
    }

    function _addSongToPlaylist(plid, song) {
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === plid) {
                playlists[x].songs.push(song);
                winston.info("playlist with id " + plid +
                         " updated. contains " + playlists[x].songs.length + " songs");
                return true;
            }
        }
        winston.error("failed to add song to playlist. " +
                      "no playlist found with id " + plid);
        return false;
    }
    function addSongToPlaylist(req,res) {
        var song  = req.body;
        var plid = req.params.plid;
        if (_addSongToPlaylist(plid, song)) {
            res.status(200).json(null);
            return;
        }
        res.status(404).json({message:"Error: playlist not found"})
    }

    function uploadAudio(req, res) {
        // this should automatically append the song to a given playlist
        var uid = req.body.uid;
        var plid = req.body.plid;
        var url = '/public/uploads/' + req.file.filename;
        var song = _song.Song("upload", url, req.body.description,
                              req.body.title, req.body.artist, "")

        if (_addSongToPlaylist(plid, song)) {
            res.status(200).json(song);

            return;
        }


        res.status(404).json({message:"Error: playlist not found"})
    }


    winston.info("playlist endpoints registered (" + playlists.length + " playlists)");
};
