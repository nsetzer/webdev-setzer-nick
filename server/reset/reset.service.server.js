
module.exports = function (app, model) {
    var winston = require("winston");
    var _message = require('../assignment/message.data.server');
    var _user    = require('../assignment/user.data.server');
    var _website = require('../assignment/website.data.server');
    var _page    = require('../assignment/page.data.server');
    var _widget  = require('../assignment/widget.data.server');

    var _song  = require('../project/song.data.server');
    var _playlist  = require('../project/playlist.data.server');

    app.delete('/api/reset', resetDatabase);

    // drop the existing collection, and populate with default data
    async function create(model,items) {

        if (!model) {
            console.log(Object.keys(model))
        }
        await model.remove()

        if (items) {
            for (let x=0; x < items.length; x++) {
                var item = items[x]
                if (item._id || item._id==='') {
                    delete item._id;
                }
                await model.create(item)
            }
        }
        let result = await model.find()
        winston.info("created " + result.length + "/" + items.length +
            " records in " + model.collection.collectionName)
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

    async function resetDatabase(req, res) {

        winston.info("reset database...")



        await create(model.UserModel, _user.getDefaultUsers(model));
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

        winston.info("reset database complete")
        res.status(200).send(_message.Error("OK"));
    }

    winston.info("db reset endpoints registered");
};
