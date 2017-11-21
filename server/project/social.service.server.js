

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
        var connection = {
            follower: req.params.uid,
            followee: req.params.fid
        }
        await model.FollowModel.create(connection);
        //await model.FollowModel.connect(req.params.uid,req.params.fid)
        winston.info("added new connection from "+req.params.uid+
                     " to "+req.params.fid);
        res.status(201).json(null)
    }

    async function deleteConnection(req,res) {
        var connection = {
            follower: req.params.uid,
            followee: req.params.fid
        }
        await model.FollowModel.remove(connection);
        //await model.FollowModel.disconnect(req.params.uid,req.params.fid)
        winston.info("removed connection from "+req.params.uid+
                     " to "+req.params.fid);
        res.status(200).json(null)
    }

    async function getUserFollowers(req,res) {
       // users = await model.FollowModel.getUserFollowers(req.params.uid, "followee", "follower")
       // winston.info("found "+users.length+" followers of " + req.params.uid)
       // res.status(200).json(users)

        var uid = req.params.uid;
        let connections = await model.FollowModel.find({followee: uid});
        let uids = connections.map( x => x.follower );
        let users = await model.UserModel.find({_id: {$in: uids}});
        res.status(200).json(users)

    }

    async function getUserFollowing(req,res) {
        var uid = req.params.uid;
        let connections = await model.FollowModel.find({follower: uid});
        let uids = connections.map( x => x.followee );
        let users = await model.UserModel.find({_id: {$in: uids}});
        res.status(200).json(users)
    }


    /**
     * return true if the given uid is connected to the fid.
     */
    async function getUserIsConnected(req,res) {

        var connection = {
            follower: req.params.uid,
            followee: req.params.fid
        }

        let results = await model.FollowModel.find(connection);

        var isConnected = results.length > 0
        if (isConnected) {
            winston.info("user "+req.params.uid+" is connected to " + req.params.fid);
        } else {
            winston.info("user "+req.params.uid+" is not connected to " + req.params.fid);
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

    async function rateList(req,res) {
        var uid = req.params.uid;
        var plid = req.params.plid;

        var data = req.body;
        data.uid = uid;
        data.plid = plid;

        // validate the input
        if (typeof data.value === 'undefined') {
            res.status(406).json(null);
            return;
        }

        await model.RatingModel.rateList(uid, plid, data.value)

        res.status(200).json(null);
    }

    async function unrateList(req,res) {
        var uid = req.params.uid;
        var plid = req.params.plid;

        await model.RatingModel.unRateList(uid, plid)

        res.status(200).json(null);
    }

    winston.info("social endpoints registered");
};
