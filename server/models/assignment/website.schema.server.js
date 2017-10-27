
module.exports = function(mongoose) {
    return mongoose.Schema({
        developerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        },
        name: String,
        description: String,
        pages: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PageModel'
        }],
        dateCreated: Date
    });
}
