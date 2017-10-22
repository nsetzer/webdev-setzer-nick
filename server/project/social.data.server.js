

/**
 *  db record indicates a one direction edge in a social network
 *  uid is following the user id given by followee.
 */
function Follow(_id, uid, followee) {
    return {
        _id: _id,
        uid: uid,
        followee: followee,
    }
}


/**
 * a notification is a message sent from uid1 to uid2
 */
function Notification(_id, uid1, uid2, message) {
    return {
        _id: _id,
        uid1: uid1,
        uid2: uid2,
        message: message
    }
}

exports.Follow = Follow;
exports.Notification = Notification;
