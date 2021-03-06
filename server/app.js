/**
 * Created by sesha on 7/27/17.
 */

/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {

    var winston = require("winston");

    var model = require("./models/model.js")();

    winston.info("current environment: " + process.env.NODE_ENV);

    require("./reset/reset.service.server")(app,model);

    require("./test-mongodb/test-mongodb.service.server")(app,model);

    require("./assignment/user.service.server")(app,model);
    require("./assignment/website.service.server")(app,model);
    require("./assignment/page.service.server")(app,model);
    require("./assignment/widget.service.server")(app,model);

    require("./assignment/flickr.service.server")(app);

    require("./project/playlist.service.server")(app,model);
    require("./project/social.service.server")(app,model);
    require("./project/queue.service.server")(app,model);

    require("./youtube/youtube.service.server")(app);

    return model
};

