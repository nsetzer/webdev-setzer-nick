
module.exports = function(mongoose, UserSchema) {
    return mongoose.model("QueueModel", UserSchema);
}