
module.exports = function(mongoose) {
    return mongoose.Schema({
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        name: String,
        description: {type:String, default:""},
        rating: { type: Number, default: 0},
        songs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SongModel'
        }],
        dateCreated: {type: Date, default: Date.now}
    });
}
