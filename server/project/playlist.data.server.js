
var _user = require('../assignment/user.data.server');
var _song = require('./song.data.server');

function Playlist(_id, uid, name) {
    return {
        _id: _id,
        uid: uid,
        name: name,
        description: "",
        songs: []
    };
}

// some api calls may return many playlists --
// which each may contain many songs. this returns
// a copy of a playlist with songs removed to save on bandwidth
function scrub( lst ) {
    return {
        _id: lst._id,
        uid: lst.uid,
        name: lst.name,
        description: lst.description,
        songs: []
    };
}

function createDefaultPlaylist(uid, plid) {
    var lst = new Playlist(plid, uid, "Default Playlist");
    lst.songs = _song.getDefaultSongs();
    return lst;
}

function getDefaultPlaylists() {
    return _user.getDefaultUsers().map(user =>
        createDefaultPlaylist(user._id,user._id));
}

exports.Playlist = Playlist;
exports.scrub = scrub;
exports.createDefaultPlaylist = createDefaultPlaylist;
exports.getDefaultPlaylists = getDefaultPlaylists;
