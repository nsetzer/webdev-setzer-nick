
module.exports = function(mongoose, SongSchema) {
    return mongoose.model("SongModel", SongSchema);
}