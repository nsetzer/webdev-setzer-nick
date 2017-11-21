
module.exports = function(mongoose) {
    return mongoose.Schema({
        follower: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        followee: { // the user being followed
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        //dateCreated: {type: Date, default: Date.now}
    });
}
