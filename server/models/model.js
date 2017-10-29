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

    mongoose.Promise = global.Promise

    mongojs('web-app-maker');

    TestSchema         = require("./test/test.schema.server")(mongoose);
    UserSchema         = require("./assignment/user.schema.server")(mongoose);
    WebsiteSchema      = require("./assignment/website.schema.server")(mongoose);
    PageSchema         = require("./assignment/page.schema.server")(mongoose);
    WidgetSchema       = require("./assignment/widget.schema.server")(mongoose);

    SongSchema         = require("./project/song.schema.server")(mongoose);
    PlaylistSchema     = require("./project/playlist.schema.server")(mongoose);
    QueueSchema        = require("./project/queue.schema.server")(mongoose);
    FollowSchema       = require("./project/follow.schema.server")(mongoose);
    NotificationSchema = require("./project/notification.schema.server")(mongoose);
    RatingSchema       = require("./project/rating.schema.server")(mongoose);

    TestModel         = require("./test/test.model.server")(mongoose,TestSchema)
    UserModel         = require("./assignment/user.model.server")(mongoose,UserSchema)
    WebsiteModel      = require("./assignment/website.model.server")(mongoose,WebsiteSchema)
    PageModel         = require("./assignment/page.model.server")(mongoose,PageSchema)
    WidgetModel       = require("./assignment/widget.model.server")(mongoose,WidgetSchema)

    SongModel         = require("./project/song.model.server")(mongoose,SongSchema)
    PlaylistModel     = require("./project/playlist.model.server")(mongoose,PlaylistSchema)
    QueueModel        = require("./project/queue.model.server")(mongoose,QueueSchema)
    FollowModel       = require("./project/follow.model.server")(mongoose,FollowSchema)
    NotificationModel = require("./project/notification.model.server")(mongoose,NotificationSchema)
    RatingModel       = require("./project/rating.model.server")(mongoose,RatingSchema)

    var model = {
        // models
        TestModel         : TestModel,
        UserModel         : UserModel,
        WebsiteModel      : WebsiteModel,
        PageModel         : PageModel,
        WidgetModel       : WidgetModel,
        SongModel         : SongModel,
        PlaylistModel     : PlaylistModel,
        QueueModel        : QueueModel,
        FollowModel       : FollowModel,
        NotificationModel : NotificationModel,
        RatingModel       : RatingModel,

        // db connections
        mongojs           : mongojs,
        mongoose          : mongoose
    };
    return model;
}