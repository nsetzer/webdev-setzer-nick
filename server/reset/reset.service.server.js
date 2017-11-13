
module.exports = function (app, model) {
    var winston = require("winston");
    var _message = require('../assignment/message.data.server');
    var _user    = require('../assignment/user.data.server');
    var _website = require('../assignment/website.data.server');
    var _page    = require('../assignment/page.data.server');
    var _widget  = require('../assignment/widget.data.server');

    var _song  = require('../project/song.data.server');
    var _playlist  = require('../project/playlist.data.server');
    var _social  = require('../project/social.data.server');

    // curl -X DELETE http://localhost:3100/api/reset
    // curl -X DELETE https://webdev-setzer-nick.herokuapp.com/api/reset
    app.delete('/api/reset', resetDatabase);

    // drop the existing collection, and populate with default data
    async function create(model,items) {

        if (!model) {
            console.log(Object.keys(model))
        }
        await model.remove()

        ids = []
        if (items) {
            for (let x=0; x < items.length; x++) {
                var item = items[x]
                if (item._id || item._id==='') {
                    delete item._id;
                }
                item = await model.create(item)
                ids.push(item._id)
            }
        }
        let result = await model.find()
        winston.info("created " + result.length + "/" + items.length +
            " records in " + model.collection.collectionName)

        return ids;
    }

    // drop the existing collection, and populate with default data
    // updates a parent collection with a reference to each child
    // object that is created

    async function createAndUpdate(modelParent, model, fieldId, fieldArray, items) {

        if (!model) {
            console.log(Object.keys(model))
        }

        await model.remove()

        if (items) {
            let x=0
            for (; x < items.length; x++) {
                var item = items[x]
                if (item._id || item._id==='') {
                    delete item._id;
                }
                let new_item = await model.create(item)
                let record = {}
                record[fieldArray] = new_item._id
                await modelParent.update({_id:new_item[fieldId]},
                                         { $push: record })
            }
        }
        let result = await model.find()
        winston.info("created " + result.length + "/" + items.length +
            " records in " + model.collection.collectionName)

    }

    async function createUserConnections(model, connections) {
        await model.FollowModel.remove()

        let users = await model.UserModel.find()

        let map = {}
        for (let x=0; x < users.length; x++) {
            map[users[x].username] = users[x]._id;
        }

        let conns = []
        for (let x=0; x < connections.length; x++) {
            let id1= map[connections[x].follower]
            let id2= map[connections[x].followee]
            conns.push(_social.Follow(id1,id2))
        }

        await model.FollowModel.collection.insert(conns)

        winston.info("created " + connections.length +
            " connections in " + model.FollowModel.collection.collectionName)

    }

    async function createUserNotifications(model, username) {

        let users = await model.UserModel.find({username: username})
        let user = users[0]

        let connections = await model.FollowModel.find({followee:user._id});
        let uids = connections.map( x => x.follower );

        let message = "Hello, from " + username

        let notifications = []
        for (var x=0; x < uids.length; x++) {
            notifications.push(_social.Notification(user._id, uids[x], message))
        }

        await model.NotificationModel.collection.insert(notifications)

        winston.info("created " + notifications.length +
            " notifications for " + username)
    }

    async function resetDatabase(req, res) {

        winston.info("reset database...")

        users = await create(model.UserModel, _user.getDefaultUsers(model));
        //await create(model.WebsiteModel,await _website.getDefaultWebsites(model));
        await createAndUpdate(model.UserModel, model.WebsiteModel,
                              "developerId", "websites",
                              await _website.getDefaultWebsites(model))

        //await create(model.PageModel, await _page.getDefaultPages(model));
        await createAndUpdate(model.WebsiteModel, model.PageModel,
                              "websiteId", "pages",
                              await _page.getDefaultPages(model))

        ////await create(model.WidgetModel, await _widget.getDefaultWidgets(model));
        await createAndUpdate(model.PageModel, model.WidgetModel,
                              "pageId", "widgets",
                              await _widget.getDefaultWidgets(model))

        // project data
        await create(model.SongModel, _song.getDefaultSongs(model));

        await createAndUpdate(model.UserModel, model.PlaylistModel,
                              "uid", "playlists",
                              await _playlist.getDefaultPlaylists(model))

        await createUserConnections(model, [
            _social.Follow("alice", "bob"),
            _social.Follow("charly", "bob"),
            _social.Follow("jannunzi", "bob"),

            _social.Follow("dan", "alice"),
            _social.Follow("charly", "alice"),
            _social.Follow("jannunzi", "alice"),

            _social.Follow("alice", "dan"),

        ]);

        await model.NotificationModel.remove()
        await createUserNotifications(model, "alice")
        await createUserNotifications(model, "bob")

        await model.RatingModel.remove()

        winston.info("reset database complete")

        res.status(200).json({
            users: users,
        });
    }

    winston.info("db reset endpoints registered");
};
