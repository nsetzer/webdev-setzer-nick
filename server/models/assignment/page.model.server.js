module.exports = function(mongoose, PageSchema) {
    return mongoose.model("PageModel", PageSchema);
}