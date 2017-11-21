
module.exports = function(mongoose, RatingSchema) {
    model =  mongoose.model("RatingModel", RatingSchema);

    model.rateList = rateList
    model.unRateList = unRateList

    function rateList(uid, plid, value) {
        var data = {uid: uid, plid: plid, value: value}
        return model.update({uid:uid,plid:plid}, data, {upsert:true})
    }

    function unRateList(uid, plid) {
        return model.remove({uid:uid,plid:plid})
    }

    return model;
}