
var _user = require('../assignment/user.data.server');
var _song = require('./song.data.server');

function Playlist(_id, uid, name) {
    return {
        _id: _id,
        uid: uid,
        name: name,
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
exports.createDefaultPlaylist = createDefaultPlaylist;
exports.getDefaultPlaylists = getDefaultPlaylists;
