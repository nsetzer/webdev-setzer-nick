

module.exports = function (app, model) {
    var winston = require("winston");
    var _social = require('./social.data.server');
    var _message = require('../assignment/message.data.server');

    var network = []
    var notifications = []
    var ratings = []

    nextId = 1000;

    app.delete('/api/user/:uid/social/:fid', deleteConnection);
    app.put(   '/api/user/:uid/social/:fid', addConnection);
    app.get(   '/api/user/:uid/social/:fid', getUserIsConnected);
    app.get(   '/api/user/:uid/social',      getUserFollowers);
    app.post('/api/user/:uid/notifications', sendNotification);
    app.get( '/api/user/:uid/notifications', getNotifications);
    app.put(   '/api/user/:uid/rate/:plid', rateList);
    app.delete('/api/user/:uid/rate/:plid', unrateList);

    function addConnection(req,res) {
        var connection = _social.Follow("" + nextId,
                                        req.params.uid,
                                        req.params.fid)
        nextId = nextId + 1
        network.push( connection );
        winston.info("added new connection from "+req.params.uid+
                     " to "+req.params.fid);
        res.status(201).json(null)
    }

    function deleteConnection(req,res) {
        var uid = req.params.uid;
        var fid = req.params.fid;

        for (var x=0; x < network.length; x++) {
            if (network[x].followee === fid && network[x].uid == uid) {
                network.splice(x,1);
                break;
            }
        }

        res.status(200).json(null);
    }


    // return a list of all users following the given uid
    function _getUserFollowers(uid) {
        var uids = []
        for (var x=0; x < network.length; x++) {
            if (network[x].followee === uid) {
                uids.push(network[x].uid)
            }
        }
        return uids;
    }

    function getUserFollowers(req,res) {
        uids = _getUserFollowers(req.params.uid)

        winston.info("found "+uids.length+" followers of " + req.params.uid)
        res.status(200).json(uids)
    }

    /**
     * return true if the given uid is connected to the fid.
     */
    function getUserIsConnected(req,res) {

        var uid = req.params.uid;
        var fid = req.params.fid;
        var isConnected = false;
        for (var x=0; x < network.length; x++) {
            if (network[x].followee === fid && network[x].uid == uid) {
                isConnected = true;
                break;
            }
        }

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
    function sendNotification(req,res) {
        var message = req.body.message;
        var uid = req.params.uid;
        var uids = _getUserFollowers(uid)

        console.log(network)
        console.log(uids)
        for (var x=0; x < uids.length; x++) {
            var n = _social.Notification("" + nextId,uid, uids[x], message);
            notifications.push(n)
        }

        winston.info("dispatched "+uids.length+" notifications");
        res.status(200).json(null)
    }

    function getNotifications(req,res) {
        var uid = req.params.uid;

        messages = []

        for (var x=0; x < notifications.length; x++) {
            if (notifications[x].uid2 == uid) {
                messages.push(notifications[x])
            }
        }

        winston.info("found "+messages.length+" notifications for user " + uid);
        res.status(200).json(messages)
    }

    // TODO: no api is provided to get the rating of a playlist
    //       this can be implemented as a server side join whenever a
    //       a playlist is returned by a query.

    function rateList(req,res) {
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

        // update an existing value
        for (let x =0; x < ratings.length; x++) {
            if (ratings[x].uid===uid && ratings[x].plid===plid) {
                ratings[x].value = data.value
                res.status(200).json(null);
                return;
            }
        }

        // add a new value
        ratings.push(data);
        res.status(200).json(null);
    }

    function unrateList(req,res) {
        var uid = req.params.uid;
        var plid = req.params.plid;

        for (let x =0; x < ratings.length; x++) {
            if (ratings[x].uid===uid && ratings[x].plid===plid) {
                ratings.splice(x,1);
                res.status(200).json(null);
                return
            }
        }
        res.status(200).json(null);
    }

    winston.info("social endpoints registered");
};
