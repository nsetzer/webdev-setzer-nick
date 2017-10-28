
var _user = require('../assignment/user.data.server');
var _song = require('./song.data.server');

function Playlist(_id, uid, name) {
    return {
        _id: _id,
        uid: uid,
        name: name,
        description: "",
        songs: [],
        rating: 0  // note: this will be filled in by
                   // a database query joing the ratings table
    };
}

function createDefaultPlaylist(uid, name, songs) {
    var lst = new Playlist("", uid, name);
    lst.songs = songs
    return lst;
}

async function getDefaultPlaylists(model) {

    var users = await model.UserModel.find();
    var songs = await model.SongModel.find().limit(5);

    let lists = []
    for (var x=0; x < users.length; x++) {
        lists.push(createDefaultPlaylist(users[x]._id,"Default Playlist", songs))
        lists.push(createDefaultPlaylist(users[x]._id,"Favorite Songs", songs))
        lists.push(createDefaultPlaylist(users[x]._id,"Workout Mix", songs))
    }

    return lists;
}

exports.Playlist = Playlist;
exports.getDefaultPlaylists = getDefaultPlaylists;
