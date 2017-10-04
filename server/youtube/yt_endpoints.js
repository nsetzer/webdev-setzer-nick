module.exports = function(app)
{
    var youtubeStream = require('youtube-audio-stream-2');
    var youtube = require("./youtube.js");
    var winston = require("winston");

    app.get('/api/youtube/:videoId', function (req, res) {
        var requestUrl = 'http://youtube.com/watch?v=' + req.params.videoId
        try {
            youtubeStream(requestUrl).pipe(res)
        } catch (exception) {
          res.status(500).send(exception)
        }
    })

    /**
     * convert the search results into something easier
     * to consume by the frontend
     */
    app.get('/api/youtube/query/:searchterm', function (req, res) {

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
                    artist: "",
                    thumbnail: item.snippet.thumbnails.high
                });
            }
            res.json(items);
        });
    })

    winston.info("youtube endpoints registered");
    // localhost:3100/api/youtube/query/searchterm
};
