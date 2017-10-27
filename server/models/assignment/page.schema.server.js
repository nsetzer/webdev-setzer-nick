
module.exports = function(mongoose) {
    return mongoose.Schema({
        websiteId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WebsiteModel'
        },
        name: String,
        title: String,
        description: String,
        widgets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'WidgetModel'
        }],
        dateCreated: Date
    });
}
