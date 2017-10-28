
function Website(_id, name, developerId, description) {
    return {
        "_id": _id,
        "name": name,
        "developerId": developerId,
        "description": description,
    };
}

exports.Website = Website;

async function getDefaultWebsites(model) {

  var users = await model.UserModel.find();

  let sites = []
  for (var x=0; x < users.length; x++) {
    sites.push( Website("", "Tic Tac Toe", users[x]._id, "Lorem" ))
    sites.push( Website("", "Checkers",    users[x]._id, "Lorem" ))
    sites.push( Website("", "Chess",       users[x]._id, "Lorem" ))
  }
  return sites;
}


exports.getDefaultWebsites = getDefaultWebsites