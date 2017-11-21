
module.exports = function(mongoose, NotificationSchema) {
    model = mongoose.model("NotificationModel", NotificationSchema);


    model.sendNotification = sendNotification
    model.getNotifications = getNotifications
    model.deleteNotification = deleteNotification

    function sendNotification(from, targets, message) {

        let notifications = []
        for (var x=0; x < targets.length; x++) {
            notifications.push(_social.Notification(from, targets[x], message))
        }

        return model.collection.insert(notifications)
    }

    function getNotifications(uid) {
        return model.NotificationModel
                .find({receiver: uid})
                .populate('sender')
                .populate('receiver')
    }


    function deleteNotification(nid) {
        return model.NotificationModel.remove({_id:nid})
    }

    return model;
}