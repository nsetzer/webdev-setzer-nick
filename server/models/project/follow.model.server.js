
module.exports = function(mongoose, FollowSchema, UserModel) {
    model = mongoose.model("FollowModel", FollowSchema);

    model.connect = connect
    model.disconnect = disconnect
    model.getUserFollowers = getUserFollowers
    model.isConnected = isConnected

    async function connect(follower,followee) {
        var connection = {
            follower: follower,
            followee: followee
        }

        return await model.create(connection)
    }

    async function disconnect(follower, followee) {
        var connection = {
            follower: follower,
            followee: followee
        }

        return await model.remove(connection)
    }

    // return a list of all users following the given uid
    // if src==followee and tgt==follower returns the set of users
    //      that are following the given uid
    // if src==follower and tgt==followee returns the set of users
    //      that the user is currently following.

    async function getUserFollowers(uid, src, tgt) {
        let record = {}
        record[src] = uid;
        let connections = await model.find(record);
        let uids = connections.map( x => x[tgt] );
        let users = await UserModel
                .find({_id: {$in: uids}});
        return users
    }

    async function isConnected(follower, followee) {
        var connection = {
            follower: follower,
            followee: followee
        }
        connections = await model.find(connection);
        var isConnected = connections.length>0;

        return isConnected
    }



    return model;
}