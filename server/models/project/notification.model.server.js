
module.exports = function(mongoose, NotificationSchema) {
    return mongoose.model("NotificationModel", NotificationSchema);
}