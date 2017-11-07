module.exports = function(mongoose, PageSchema, WebsiteModel) {
    let model = mongoose.model("PageModel", PageSchema);

    model.createPage = createPage
    model.findAllPagesForWebsite = findAllPagesForWebsite
    model.findPageById = findPageById
    model.updatePage = updatePage
    model.deletePage = deletePage

    async function createPage(websiteId, page) {
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

    function findAllPagesForWebsite(websiteId) {

        return model.find({websiteId:websiteId})
    }

    async function findPageById(pageId) {
        let pages = await model.find({_id:pageId})
        if (pages.length>0) {
            return pages[0]
        }
        return null
    }

    function updatePage(pageId, page) {
        if (page._id || page._id==='') {
            delete page._id;
        }
        return model.update({_id:pageId},page)
    }

    async function deletePage(pageId) {
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