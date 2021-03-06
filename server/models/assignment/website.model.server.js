module.exports = function(mongoose, WebsiteSchema, UserModel) {
    let model = mongoose.model("WebsiteModel", WebsiteSchema);

    model.createWebsiteForUser = createWebsiteForUser
    model.findAllWebsitesForUser = findAllWebsitesForUser
    model.findWebsiteById = findWebsiteById
    model.updateWebsite = updateWebsite
    model.deleteWebsite = deleteWebsite

    async function createWebsiteForUser(userId, website) {
        if (website._id || website._id==='') {
            delete website._id;
        }

        website.developerId = userId;

        let new_website = await model.create(website)

        await UserModel
            .update( {_id:userId},
                     { $push: { pages: new_website._id } });

        return new_website;
    }

    function findAllWebsitesForUser(userId) {

        return model.find({developerId:userId})
    }

    async function findWebsiteById(websiteId) {
        let sites = await model.find({_id:websiteId})

        if (sites.length>0) {
            return sites[0]
        }

        return null
    }

    function updateWebsite(websiteId, website) {
        if (website._id || website._id==='') {
            delete website._id;
        }
        return model.update({_id:websiteId},website)
    }

    async function deleteWebsite(websiteId) {

        let website = await model.findWebsiteById(websiteId)

        if (website) {
            await model.remove({_id: websiteId})
            await UserModel
                    .update({_id:website.developerId},
                            { $pull: { websites: websiteId } });
            return true;
        }

        return false;
    }

    return model
}