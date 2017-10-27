

module.exports = function(mongoose, TestSchema)
{
    return mongoose.model("TestModel", TestSchema);
}