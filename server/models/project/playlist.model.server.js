
module.exports = function(mongoose, UserSchema, SongModel, UserModel) {
    let model = mongoose.model("PlaylistModel", UserSchema);

    model.createPlaylist = createPlaylist
    model.findAllPlaylistsForUser = findAllPlaylistsForUser
    model.findPlaylistById = findPlaylistById
    model.findPlaylistsByTerm = findPlaylistsByTerm
    model.updatePlaylist = updatePlaylist
    model.deletePlaylist = deletePlaylist
    model.findAllSongsForPlaylist = findAllSongsForPlaylist
    model.addSongToPlaylist = addSongToPlaylist
    model.removeSongFromPlaylist = removeSongFromPlaylist
    model.findPlaylistsContainingSong = findPlaylistsContainingSong

    async function createPlaylist(uid,lst) {
        if (lst._id || lst._id==='') {
            delete lst._id;
        }

        lst.uid = uid;

        let new_playlist = await model.create(lst);

        await UserModel.update( {_id:uid},
                                { $push: { playlists: new_playlist._id } })

        return new_playlist;
    }


    function findAllPlaylistsForUser(uid) {
        return model.find({uid:uid})
    }

    function findPlaylistById(plid) {
        return model.find({_id:plid})
    }

    async function findPlaylistsByTerm(searchTerm) {

        let playlists = await model.find();

        var parts = searchTerm.toLowerCase().split(" ");
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

        if (lists.length > 0) {
            // sort matching sites by relevance
            lists.sort((a,b)=>(b.relevance - a.relevance));
            lists = lists.slice(0,10);
        }

        return lists
    }

    function updatePlaylist(plid, lst) {
        return model.update({_id:plid},lst)
    }

    async function deletePlaylist(plid) {
        let playlists = await model.find({_id:plid})

        if (playlists) {
            await model.remove({_id:plid})
            await UserModel
                    .update({_id:playlists[0].uid},
                            { $pull: { widgets: plid } });
            return true
        }

        return false
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

    async function findAllSongsForPlaylist(pid) {
        let playlists = await model.find({_id:pid})
        if (playlists) {
            let playlist = playlists[0]
            let songs = await SongModel
                .find({_id: {$in: playlist.songs}});
            songs = reorder(playlist.songs, songs)
            return songs;
        }
        return [];
    }

    async function addSongToPlaylist(plid, song) {

        if (song._id || song._id==='') {
            delete song._id;
        }

        let new_song = await SongModel.create(song);

        await model.update(
                {_id:plid},
                { $push: { songs: new_song._id } }
            );

        return true;
    }

    async function removeSongFromPlaylist(plid,idx) {

        let playlists = await model.find({_id:plid})

        if (playlists && playlists.length>0) {
            let songs = playlists[0].songs
            if ( idx < 0 || idx >= songs.length ) {
                return false
            }

            songs.splice(idx,1)

            await model.update({_id:plid}, {songs:songs})

            return true
        }

        return false
    }

    async function findPlaylistsContainingSong(vid) {

        let songs = await model.SongModel.find({videoId:vid})
        let sids = songs.map(s => s._id)

        let lists = await model.PlaylistModel
                .find({songs: {$all: sids}});

        return lists
    }


    return model
}