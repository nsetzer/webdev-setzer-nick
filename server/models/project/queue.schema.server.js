
module.exports = function(mongoose) {
    return mongoose.Schema({
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel',
            unique: true
        },
        songs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SongModel'
        }],
    });
}
