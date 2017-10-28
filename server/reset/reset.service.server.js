
module.exports = function (app, model) {
    var winston = require("winston");
    var _message = require('../assignment/message.data.server');
    var _user    = require('../assignment/user.data.server');
    var _website = require('../assignment/website.data.server');
    var _page    = require('../assignment/page.data.server');
    var _widget  = require('../assignment/widget.data.server');

    app.delete('/api/reset', resetDatabase);

    async function create(model,items) {

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
        winston.info("created " + result.length + " records in " +
            model.collection.collectionName)
    }

    async function resetDatabase(req, res) {

        var items;

        winston.info("reset database...")

        await model.TestModel.remove()
        await model.UserModel.remove()
        await model.WebsiteModel.remove()
        await model.PageModel.remove()
        await model.UserModel.remove()
        await model.WidgetModel.remove()

        await create(model.UserModel,   _user.getDefaultUsers(model));
        await create(model.WebsiteModel,await _website.getDefaultWebsites(model));
        await create(model.PageModel,   await _page.getDefaultPages(model));
        await create(model.WidgetModel, await _widget.getDefaultWidgets(model));

        winston.info("reset database complete")
        res.status(200).send(_message.Error("OK"));
    }

    winston.info("db reset endpoints registered");
};
