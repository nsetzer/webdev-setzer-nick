module.exports = function (app) {
    var winston = require("winston");
    var _playlist = require('./playlist.data.server');

    playlists = _playlist.getDefaultPlaylists();
    nextId = 1000;

    app.post('/api/user/:uid/playlist', createPlaylist);
    app.get('/api/user/:uid/playlist', findAllPlaylistsForUser);
    app.get('/api/playlist/:plid', findPlaylistById);
    app.put('/api/playlist/:plid', updatePlaylist);
    app.delete('/api/playlist/:plid', deletePlaylist);
    app.put('/api/playlist/:plid/append', addSongToPlaylist);

    function createPlaylist(req, res) {
        var playlist = req.body;
        playlist._id = "" + nextId;
        playlist.uid = req.params.uid;
        nextId = nextId + 1;
        playlists.push( playlist );
        res.status(201).json(playlist)
    }

    function findAllPlaylistsForUser(req, res) {
        var lists = [];
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x].uid === req.params.uid) {
                lists.push(playlists[x]);
            }
        }
        res.json(lists)
    }

    function findPlaylistById(req, res) {
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                res.json(playlists[x]);
                return;
            }
        }

        res.status(404).send("Error: playlist not found")
    }

    function updatePlaylist(req, res) {
        var playlist  = req.body;
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                playlist._id = playlists[x]._id;
                playlists[x] = playlist;
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: playlist not found")
    }

    function deletePlaylist(req, res) {
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                playlists.splice(x,1);
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: playlist not found")
    }

    function addSongToPlaylist(req,res) {
        var song  = req.body;
        for (let x = 0; x < playlists.length; x++) {
            if (playlists[x]._id === req.params.plid) {
                playlists[x].songs.push(song);
                res.status(200).send("OK");
                return;
            }
        }
        res.status(404).send("Error: playlist not found")
    }

    winston.info("playlist endpoints registered (" + playlists.length + " playlists)");
};
