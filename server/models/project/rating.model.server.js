
module.exports = function(mongoose, RatingSchema) {
    return mongoose.model("RatingModel", RatingSchema);
}