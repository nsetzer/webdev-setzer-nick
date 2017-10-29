

module.exports = function (app, model) {
    var winston = require("winston");
    var _social = require('./social.data.server');
    var _message = require('../assignment/message.data.server');

    app.delete('/api/user/:uid/social/:fid', deleteConnection);
    app.put(   '/api/user/:uid/social/:fid', addConnection);
    app.get(   '/api/user/:uid/social/:fid', getUserIsConnected);
    app.get(   '/api/user/:uid/social',      getUserFollowers);
    app.post('/api/user/:uid/notifications', sendNotification);
    app.get( '/api/user/:uid/notifications', getNotifications);
    app.put(   '/api/user/:uid/rate/:plid', rateList);
    app.delete('/api/user/:uid/rate/:plid', unrateList);

    async function addConnection(req,res) {
        var connection = {
            follower: req.params.uid,
            followee: req.params.fid
        }

        await model.FollowModel.create(connection)

        winston.info("added new connection from "+req.params.uid+
                     " to "+req.params.fid);

        res.status(201).json(null)
    }

    async function deleteConnection(req,res) {
        var connection = {
            follower: req.params.uid,
            followee: req.params.fid
        }

        await model.FollowModel.remove(connection)

        winston.info("removed connection from "+req.params.uid+
                     " to "+req.params.fid);

        res.status(200).json(null)
    }


    // return a list of all users following the given uid
    async function _getUserFollowers(uid) {
        connections = await model.FollowModel.find({followee:uid});
        return connections.map( x => x.follower );
    }

    async function getUserFollowers(req,res) {
        uids = await _getUserFollowers(req.params.uid)
        winston.info("found "+uids.length+" followers of " + req.params.uid)
        res.status(200).json(uids)
    }

    /**
     * return true if the given uid is connected to the fid.
     */
    async function getUserIsConnected(req,res) {

        var uid = req.params.uid;
        var fid = req.params.fid;

        var connection = {
            follower: uid,
            followee: fid
        }

        connections = await model.FollowModel.find(connection);
        var isConnected = connections.length>0;

        if (isConnected) {
            winston.info("user "+uid+" is connected to " + fid);
        } else {
            winston.info("user "+uid+" is not connected to " + fid);
        }

        res.status(200).json(isConnected)
    }

    /**
     *
     * post data format: { message: ""}
     */
    async function sendNotification(req,res) {
        var message = req.body.message;
        var uid = req.params.uid;
        var uids = await _getUserFollowers(uid)

        let notifications = []
        for (var x=0; x < uids.length; x++) {
            notifications.push(_social.Notification(uid, uids[x], message))
        }

        await model.NotificationModel.collection.insert(notifications)

        winston.info("dispatched "+uids.length+" notifications");

        res.status(200).json(null)
    }

    async function getNotifications(req,res) {
        var uid = req.params.uid;
        messages = await model.NotificationModel.find({receiver: uid})
        winston.info("found "+messages.length+" notifications for user " + uid);
        res.status(200).json(messages)
    }

    // TODO: no api is provided to get the rating of a playlist
    //       this can be implemented as a server side join whenever a
    //       a playlist is returned by a query.

    async function rateList(req,res) {
        var uid = req.params.uid;
        var plid = req.params.plid;

        var data = req.body;
        data.uid = uid;
        data.plid = plid;

        // validate the input
        if (typeof data.value === 'undefined') {
            console.log(data)
            res.status(406).json(null);
            return;
        }

        await model.RatingModel
            .update({uid:uid, plid: plid}, data, {upsert:true})

        res.status(200).json(null);
    }

    async function unrateList(req,res) {
        var uid = req.params.uid;
        var plid = req.params.plid;

        await model.RatingModel
            .remove({uid:uid, plid: plid})

        res.status(200).json(null);
    }

    winston.info("social endpoints registered");
};
