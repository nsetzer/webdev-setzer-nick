
module.exports = function(mongoose) {
    return mongoose.Schema({
        videoId: String,
        description: String,
        title: String,
        artist: { type:String, default: "" },
        thumbnail: String,
    });
}
