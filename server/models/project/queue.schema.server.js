
module.exports = function(mongoose) {
    return mongoose.Schema({
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        songs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SongModel'
        }],
    });
}
