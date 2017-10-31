module.exports = function(mongoose, PageSchema) {
    let model = mongoose.model("PageModel", PageSchema);


    model.createPage = function(websiteId, page) {
        if (page._id || page._id==='') {
            delete page._id;
        }

        page.websiteId = websiteId;

        return model.create(page)
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

    model.deletePage = function(pageId) {
        return model.remove({_id:pageId})
    }

    return model
}