
module.exports = function(mongoose) {
    return mongoose.Schema({
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        message: String,
        dateCreated: {type: Date, default: Date.now}
    });
}
