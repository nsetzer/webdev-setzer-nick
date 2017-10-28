
module.exports = function (app, model) {
    var winston = require("winston");
    var _message = require('../assignment/message.data.server');
    var _user = require('../assignment/user.data.server');

    app.delete('/api/reset', resetDatabase);

    async function create(model,items) {
        for (let x=0; x < items.length; x++) {
            if (items[x]._id) {
                delete items[x]._id;
            }
            await model.create(items[x])


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
        await model.WebsiteMode.remove()
        await model.PageModel.remove()
        await model.UserModel.remove()
        await model.WidgetMode.remove()

        await create(model.UserModel,_user.getDefaultUsers());

        winston.info("reset database complete")
        res.status(200).send(_message.Error("OK"));
    }

    winston.info("db reset endpoints registered");
};
