
module.exports = function(mongoose, UserSchema) {
    return mongoose.model("PlaylistModel", UserSchema);
}