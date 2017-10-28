
function Page(_id, name, websiteId, title, description) {
    return {
        "_id": _id,
        "name": name,
        "websiteId": websiteId,
        "title": title,
        "description": description,
    };
}

async function getDefaultPages(model) {

  var sites = await model.WebsiteModel.find();

  let pages = []
  for (var x=0; x < sites.length; x++) {
    pages.push(Page( "", "Easy",   sites[x]._id, "Post 1", "Lorem" ))
    pages.push(Page( "", "Medium", sites[x]._id, "Post 2", "Lorem" ))
    pages.push(Page( "", "Hard",   sites[x]._id, "Post 3", "Lorem" ))
  }
  return pages;
}

exports.Page = Page;
exports.getDefaultPages = getDefaultPages;