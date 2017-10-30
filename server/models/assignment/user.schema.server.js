
module.exports = function(mongoose) {
    return mongoose.Schema({
        username: { type: String, unique: true },
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        role: {type: String, default: "user"},
        phone: {type: String, default: ""},
        websites: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WebsiteModel'
        }],
        playlists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PlaylistModel'
        }],
        dateCreated: {type: Date, default: Date.now}
    });
}
