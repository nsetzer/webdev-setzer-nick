

module.exports = function(mongoose, TestSchema)
{
    return model.mongoose.model("TestModel", TestSchema);
}