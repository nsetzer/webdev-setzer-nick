

module.exports = function (app, model) {
    var winston = require("winston");
    var _social = require('./social.data.server');
    var _message = require('../assignment/message.data.server');

    app.delete('/api/user/:uid/social/:fid', deleteConnection);
    app.put(   '/api/user/:uid/social/:fid', addConnection);
    app.get(   '/api/user/:uid/social/:fid', getUserIsConnected);
    app.get(   '/api/user/:uid/social',      getUserFollowers);
    app.get(   '/api/user/:uid/social-following', getUserFollowing);
    app.post(  '/api/user/:uid/notifications', sendNotification);
    app.get(   '/api/user/:uid/notifications', getNotifications);
    app.delete('/api/user/:uid/notification/:nid', deleteNotification);
    app.put(   '/api/user/:uid/rate/:plid', rateList);
    app.delete('/api/user/:uid/rate/:plid', unrateList);

    async function addConnection(req,res) {
        await model.FollowModel.connect(req.params.uid,req.params.fid)
        winston.info("added new connection from "+req.params.uid+
                     " to "+req.params.fid);
        res.status(201).json(null)
    }

    async function deleteConnection(req,res) {
        await model.FollowModel.disconnect(req.params.uid,req.params.fid)
        winston.info("removed connection from "+req.params.uid+
                     " to "+req.params.fid);
        res.status(200).json(null)
    }





    async function getUserFollowers(req,res) {
        users = await model.FollowModel.getUserFollowers(req.params.uid, "followee", "follower")
        winston.info("found "+users.length+" followers of " + req.params.uid)
        res.status(200).json(users)
    }

    async function getUserFollowing(req,res) {
        users = await model.FollowModel.getUserFollowers(req.params.uid, "follower", "followee")
        winston.info("found "+users.length+" followees of " + req.params.uid)
        res.status(200).json(users)
    }


    /**
     * return true if the given uid is connected to the fid.
     */
    async function getUserIsConnected(req,res) {

        var uid = req.params.uid;
        var fid = req.params.fid;

        let isConnected = await model.FollowModel.isConnected(uid, fid);

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

        let connections = await model.FollowModel.find({followee:uid});
        let uids = connections.map( x => x.follower );

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
        let messages = await model.NotificationModel
            .find({receiver: uid})
            .populate('sender')
            .populate('receiver')
        winston.info("found "+messages.length+" notifications for user " + uid);
        res.status(200).json(messages)
    }

    async function deleteNotification(req,res) {
        var uid = req.params.uid;
        var nid = req.params.nid;
        await model.NotificationModel.remove({_id:nid})
        let messages = await model.NotificationModel
            .find({receiver: uid})
            .populate('sender')
            .populate('receiver')
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
