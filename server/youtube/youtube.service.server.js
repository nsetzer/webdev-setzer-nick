module.exports = function(app)
{
    var youtubeStream = require('youtube-audio-stream-2');
    var youtube = require("./youtube.js");
    var winston = require("winston");

    app.get('/api/youtube/:videoId', streamVideo);
    app.get('/api/youtube/query/:searchterm', keywordSearch);
    app.get('/api/youtube/related/:videoId', relatedSearch);

    function streamVideo(req, res) {
        var requestUrl = 'http://youtube.com/watch?v=' + req.params.videoId
        winston.info("requesting stream: " + requestUrl)
        try {
            youtubeStream(requestUrl).pipe(res)
        } catch (exception) {
          res.status(500).send(exception)
        }
    }


    function keywordSearch(req, res) {

        youtube.keywordSearch(req.params.searchterm, function(code, ytres) {
            if (code != 200) {
                res.status(400).json([])
            }
            var items = []

            for (i = 0; i < ytres.items.length; ++i) {
                var item = ytres.items[i];
                items.push({
                    videoId: item.id.videoId,
                    description: item.snippet.description,
                    title: item.snippet.title,
                    artist: "Unkown Artist",
                    thumbnail: item.snippet.thumbnails.high.url
                });
            }
            res.json(items);
        });
    }

    function relatedSearch(req, res) {

        youtube.getRelated(req.params.videoId, function(code, ytres) {
            if (code != 200) {
                winston.error( ytres );
                res.status(200).json([])
                return;
            }
            var items = []

            if (ytres.items && ytres.items.length > 0) {
                for (i = 0; i < ytres.items.length; ++i) {
                    var item = ytres.items[i];
                    items.push({
                        videoId: item.id.videoId,
                        description: item.snippet.description,
                        title: item.snippet.title,
                        artist: "Unknown Artist",
                        thumbnail: item.snippet.thumbnails.high.url
                    });
                }
            }
            res.json(items);
        });
    }

    winston.info("youtube endpoints registered");
};
