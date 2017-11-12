
module.exports = function(mongoose, QueueSchema) {
    model = mongoose.model("QueueModel", QueueSchema);

    model.setQueue = setQueue
    model.getQueue = getQueue
    model.getQueueHead = getQueueHead
    model.deleteQueueHead = deleteQueueHead

    async function setQueue(uid,songs) {
        var queue = {
            uid: uid,
            songs: songs
        };
        if (await model.findOne({"uid":uid})) {
            await model.update({"uid":uid}, queue)
        } else {
            await model.create(queue)
        }

        return queue
    }

    async function getQueue(uid) {

        let queues = await model.find({uid: uid})
                                .populate('songs')

        // return a default queue
        if (queues.length==0) {
            return {uid: uid, songs: []}
        }

        return queues[0]
    }

    function _getUrl(song) {
        if (song.videoId.startsWith("/public")) {
            return song.videoId;
        } else {
            return "/api/youtube/" + song.videoId
        }
    }

    async function getQueueHead(uid) {
        var queues = await model
            .find({uid:uid})
            .populate("songs");

        if (queues && queues.length > 0) {
            let songs = queues[0].songs
            let song = null;
            if (songs.length>0) {
                song = queues[0].songs[0];
                song.url = _getUrl(song)
                song.length = queues[0].length;
            }

            return song;
        }

        return null;
    }

    // returns the new head
    async function deleteQueueHead(uid) {
        var queue = await model
            .findOne({uid:uid})
            .populate("songs");

        if (queue) {
            let songs = queue.songs
            let song = null;
            // grab the NEXT song
            if (songs.length>1) {
                song = queues[0].songs[1];
                song.url = _getUrl(song)
                song.length = queues[0].length-1;
            }
            // delete the head.
            if (songs.length>0) {
                await model.update({uid:uid},
                                   { $pop: { songs: -1 } }
                );
            }

            return song;
        }

        return null;
    }

    return model;
}