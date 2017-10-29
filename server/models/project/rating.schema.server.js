
module.exports = function(mongoose) {
    return mongoose.Schema({
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        plid: { // the user being followed
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PlaylistModel'
        },
        value: Number,
        dateCreated: {type: Date, default: Date.now}
    });
}
