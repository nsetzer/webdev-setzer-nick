
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

async function getDefaultPlaylists(model) {

    var users = await model.UserModel.find();
    var songs = await model.SongModel.find()

    let lists = []
    let name = ""
    let names = [" Playlist", " Songs", " Mix", " Song List", "s"]
    for (var x=0; x < users.length; x++) {

        name = "Default" + names[Math.floor(Math.random() * names.length)]
        shuffleArray(songs)
        lists.push(createDefaultPlaylist(users[x]._id,name, songs.slice(0,5)))
        name = "Favorite" + names[Math.floor(Math.random() * names.length)]
        shuffleArray(songs)
        lists.push(createDefaultPlaylist(users[x]._id,name, songs.slice(0,5)))
        name = "Workout" + names[Math.floor(Math.random() * names.length)]
        shuffleArray(songs)
        lists.push(createDefaultPlaylist(users[x]._id,name, songs.slice(0,5)))
    }

    return lists;
}

exports.Playlist = Playlist;
exports.getDefaultPlaylists = getDefaultPlaylists;
