
module.exports = function(mongoose, UserSchema) {
    return mongoose.model("UserModel", UserSchema);
}