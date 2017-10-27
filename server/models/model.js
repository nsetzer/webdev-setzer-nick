module.exports = function() {

    var mongoose = require("mongoose");
    var mongojs  = require('mongojs');

    var connectionString = 'mongodb://127.0.0.1:27017/cs5610'; // for local
    if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
      var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
      var password = process.env.MLAB_PASSWORD_WEBDEV;
      connectionString = 'mongodb://' + username + ':' + password;
      connectionString += '@ds129374.mlab.com:29374/heroku_40l0kd1s';
    }

    mongoose.connect(connectionString, {
      useMongoClient: true
    });

    mongojs('web-app-maker');

    TestSchema       = require("./test/test.schema.server")(mongoose);
    UserSchema       = require("./assignment/user.schema.server")(mongoose);
    WebsiteSchema    = require("./assignment/website.schema.server")(mongoose);
    PageSchema       = require("./assignment/page.schema.server")(mongoose);
    WidgetSchema     = require("./assignment/widget.schema.server")(mongoose);

    var model = {
        // schemas


        // models
        TestModel        : require("./test/test.model.server")(mongoose,TestSchema),
        userModel        : require("./assignment/user.model.server")(mongoose,UserSchema),
        websiteMode      : require("./assignment/website.model.server")(mongoose,WebsiteSchema),
        pageModel        : require("./assignment/page.model.server")(mongoose,PageSchema),
        widgetMode       : require("./assignment/widget.model.server")(mongoose,WidgetSchema),

        // db connections
        mongojs          : mongojs,
        mongoose         : mongoose
    };
    return model;
}