module.exports = function(mongoose, WidgetSchema) {
    return mongoose.model("WidgetModel", WidgetSchema);
}