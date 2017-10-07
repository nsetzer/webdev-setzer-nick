
//https://developers.google.com/youtube/v3/docs/videos#properties
//https://developers.google.com/youtube/v3/docs/search/list
// https://console.developers.google.com/apis/library
// https://developers.google.com/youtube/v3/quickstart/nodejs
//
//npm install googleapis --save
//npm install google-auth-library --save
//

var winston = require("winston");
var google = require('googleapis');
var googleAuth = require('google-auth-library');

var http = require("http");
var https = require("https");

// get the youtube APIKEY from the environment
var APIKEY = ""
if (process.env.YOUTUBE_APIKEY) {
    winston.warn(`key:${process.env.YOUTUBE_APIKEY}:`)
    var APIKEY = process.env.YOUTUBE_APIKEY;
} else {
    winston.warn("YOUTUBE_APIKEY not specified by environment")
}

// load a set of cached outputs from the API calls,
// use these cached samples when there is no APIKEY available.
// this saves on the daily quota when testing.
var sample = require("./yt_api_sample.js")

function sendRequest(options, onResult)
{
    //https://nodejs.org/api/http.html#http_http_request_options_callback

    var port = options.port == 443 ? https : http;
    var req = port.get(options, function(res)
    {
        var output = '';
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        winston.error(err);
    });

    req.end();

};

exports.getRelated = function(vid, onResult) {

    // return a default value when the APIKEY is not provided
    if (APIKEY==="") {
        onResult(200,sample.yt_related_example);
        return;
    }

    var path = "/youtube/v3/search"
    path = path + "?part=snippet&maxResults=5"
    path = path + `&relatedToVideoId=${vid}&type=video&key=${APIKEY}`

    var options = {
        port:443,
        hostname: "www.googleapis.com",
        path: path
    }

    sendRequest(options, onResult);
}

exports.keywordSearch = function(searchterm, onResult) {

    // return a default value when the APIKEY is not provided
    if (APIKEY==="") {
        onResult(200,sample.yt_search_example);
        return;
    }

    searchterm = encodeURIComponent(searchterm);

    var path = "/youtube/v3/search"
    path = path + "?part=snippet&maxResults=5"
    path = path + `&q=${searchterm}&type=video&key=${APIKEY}`

    var options = {
        port:443,
        hostname: "www.googleapis.com",
        path: path
    }

    sendRequest(options, onResult);
}

/*

Example Usage

var jsonfile = require('jsonfile')

keywordSearch("stone temple pilots wicked garden", function(code,obj) {
    var file = 'search-payload.json'
    jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
    })
});

getRelated("5rOiW_xY-kc", function(code,obj) {
    var file = 'related-payload.json'
    jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
    })
});
*/
