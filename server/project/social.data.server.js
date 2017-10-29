

/**
 *  db record indicates a one direction edge in a social network
 *  uid is following the user id given by followee.
 */
function Follow(follower, followee) {
    return {
        follower: follower,  // the user who is following someone
        followee: followee,  // the user who is being followed
    }
}


/**
 * a notification is a message sent from uid1 to uid2
 */
function Notification(uid1, uid2, message) {
    return {
        sender: uid1,
        receiver: uid2,
        message: message
    }
}

exports.Follow = Follow;
exports.Notification = Notification;
