module.exports = function(mongoose, WebsiteSchema) {
    return mongoose.model("WebsiteModel", WebsiteSchema);
}