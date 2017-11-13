
module.exports = function(mongoose, SongSchema) {
    let model = mongoose.model("SongModel", SongSchema);

    model.createSong = createSong
    model.updateSong = updateSong
    model.removeSong = removeSong

    function createSong(song) {
        return model.create(song)
    }

    function updateSong(sid, song) {
        return model.update({_id:sid},song)
    }

    function removeSong(sid) {
        return model.remove({_id:sid})
    }

    return model
}