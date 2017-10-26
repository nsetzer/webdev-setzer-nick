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

    var model = {
        userModel        : require("./assignment/user.model.server")(),
        /*pageModel        : require("./assignment/page.model.server")(),
        widgetMode       : require("./assignment/widget.model.server")(),
        websiteMode      : require("./assignment/website.model.server")(),*/
        mongojs          : mongojs,
        mongoose         : mongoose
    };
    return model;
}