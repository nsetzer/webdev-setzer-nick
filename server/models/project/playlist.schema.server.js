
module.exports = function(mongoose) {
    return mongoose.Schema({
        uid: String,
        name: String,
        firstName: String,
        description: String,
        rating: { type: Number, default: 0},
        songs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SongModel'
        }],
        dateCreated: {type: Date, default: Date.now}
    });
}
