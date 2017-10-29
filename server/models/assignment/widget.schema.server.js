
module.exports = function(mongoose) {
    return mongoose.Schema({
        pageId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PageModel'
        },
        widgetType: {
            type: String,
            enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT', 'TEXT'],
        },
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deleteable: Boolean,
        formatted: Boolean,
        dateCreated: {type: Date, default: Date.now}
    });
}
