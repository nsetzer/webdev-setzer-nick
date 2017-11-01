module.exports = function(mongoose, PageSchema, WebsiteModel) {
    let model = mongoose.model("PageModel", PageSchema);

    model.createPage = async function(websiteId, page) {
        if (page._id || page._id==='') {
            delete page._id;
        }

        page.websiteId = websiteId;

        let new_page = await model.create(page)

        await WebsiteModel
            .update( {_id:page.websiteId},
                     { $push: { pages: new_page._id } });

        return new_page;
    }

    model.findAllPagesForWebsite = function(websiteId) {
        return model.find({websiteId:websiteId})
    }

    model.findPageById = async function(pageId) {
        let pages = await model.find({_id:pageId})
        if (pages.length>0) {
            return pages[0]
        }
        return null
    }

    model.updatePage = function(pageId, page) {
        if (page._id || page._id==='') {
            delete page._id;
        }
        return model.update({_id:pageId},page)
    }

    model.deletePage = async function(pageId) {
        let page = await model.findPageById(pageId)
        if (page) {
            await model.remove({_id:pageId})
            await WebsiteModel
                    .update({_id:page.websiteId},
                            { $pull: { pages: pageId } });
            return true;
        }

        return false;
    }

    return model
}