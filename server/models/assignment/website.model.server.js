module.exports = function(mongoose, WebsiteSchema) {
    let model = mongoose.model("WebsiteModel", WebsiteSchema);

    model.createWebsiteForUser = function (userId, website) {
        if (website._id || website._id==='') {
            delete website._id;
        }

        website.developerId = userId;

        return model.create(website)
    }


    model.findAllWebsitesForUser = function (userId) {
        return model.find({developerId:userId})
    }

    model.findWebsiteById = async function (websiteId) {
        let sites = await model.find({_id:websiteId})

        if (sites.length>0) {
            return sites[0]
        }

        return null
    }

    model.updateWebsite = function (websiteId, website) {
        if (website._id || website._id==='') {
            delete website._id;
        }
        return model.update({_id:websiteId},website)

    }
    model.deleteWebsite = function (websiteId) {
        return model.remove({_id:websiteId})
    }

    return model
}