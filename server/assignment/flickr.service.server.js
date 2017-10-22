

module.exports = (app) => {

    // localhost:3100/api/search?text=lego
    app.get("/api/search", searchPhotos);

    var winston = require("winston");

    var http = require("http");
    var https = require("https");

    var flikr_data = require('./flickr.data.server');

    var APIKEY = ""
    if (process.env.FLICKR_APIKEY) {
        winston.warn(`key:${process.env.FLICKR_APIKEY}:`)
        var APIKEY = process.env.FLICKR_APIKEY;
    } else {
        winston.warn("FLICKR_APIKEY not specified by environment")
    }

    var APISECRET = ""
    if (process.env.FLICKR_APISECRET) {
        winston.warn(`key:${process.env.FLICKR_APISECRET}:`)
        var APISECRET = process.env.FLICKR_APISECRET;
    } else {
        winston.warn("FLICKR_APISECRET not specified by environment")
    }

    urlBase = "/services/rest/" +
              "?method=flickr.photos.search&format=json" +
              "&api_key=" + APIKEY +
              "&text=";

    function _sendRequest(options, onResult)
    {
        console.log(options)
        var port = options.port == 443 ? https : http;
        var req = port.get(options, function(res)
        {
            var output = '';
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                output += chunk;
            });

            res.on('end', function() {
                output = output.replace("jsonFlickrApi(","");
                output = output.substring(0,output.length-1)
                var obj = JSON.parse(output);
                onResult(res.statusCode, obj);
            });
        });

        req.on('error', function(err) {
            winston.error(err);
        });
        req.end();
    };

    function _searchPhotos(searchTerm, onResult) {
        //searchTerm = encodeURIComponent(searchTerm);
        const path = this.urlBase + searchTerm;

        var options = {
            port:443,
            hostname: "api.flickr.com",
            path: path
        }

        _sendRequest(options, onResult);
    }

    function _convertPhoto(photo) {
        return { url: 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg',
                 owner: photo.owner,
                 title: photo.title }
    }
    function _convertResponse(data) {
        return data.photos.photo.map( _convertPhoto );
    }

    /*
     * returns a json responce, a list of photos
     *         each photo is a json object with the following fields
     *           - owner
     *           - title
     *           - url
     */
    function searchPhotos(req, res) {

        if (!APIKEY) {
            res.json(_convertResponse(flikr_data.FLICKR_API_SAMPLE))
            return;
        }

        var searchTerm = req.query.text;

        _searchPhotos(searchTerm, function(code,f_res) {

            if (code != 200) {
                res.status(400).json([])
            }

            // todo filter results, using the secret
            res.json(_convertResponse(f_res));
        });
    }

    winston.info("flickr endpoints registered");
};

