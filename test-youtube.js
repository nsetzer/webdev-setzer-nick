
var jsonfile = require('jsonfile')

var yt = require("./server/youtube/youtube.js")

yt.getRelated("5rOiW_xY-kc", function(code,obj) {
    var file = 'related-payload.json'
    console.log("result" + code)
    jsonfile.writeFile(file, obj, function (err) {
        console.error(err)
    })
});
