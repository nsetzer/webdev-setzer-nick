
module.exports = function(mongoose, FollowSchema) {
    return mongoose.model("FollowModel", FollowSchema);
}