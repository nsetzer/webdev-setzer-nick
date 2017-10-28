
module.exports = function(mongoose) {
    return mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        websites: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WebsiteModel'
        }],
        playlists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PlaylistModel'
        }],
        dateCreated: Date
    });
}
