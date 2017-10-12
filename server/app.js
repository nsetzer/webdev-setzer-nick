/**
 * Created by sesha on 7/27/17.
 */

/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {

    require("./server/test-mongodb/app")(app);


    require("./server/assignment/user.service.server")(app);
    require("./server/assignment/page.service.server")(app);
    require("./server/assignment/website.service.server")(app);
    require("./server/assignment/widget.service.server")(app);

    require("./server/youtube/yt_endpoints")(app);


};

