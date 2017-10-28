
function Song(_id, videoId, description, title, artist, thumbnail) {
    return {
        _id: _id,
        videoId: videoId,
        description: description,
        title: title,
        artist: artist,
        thumbnail: thumbnail
    };
}

function getDefaultSongs(model) {
    return [
        Song('',"Yn1WbBaWTdc","","Wicked Garden","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"2oPeZFOpPAM","","Wicked Garden (live)","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"9lZgHdOU-ko","","Wicked Garden (Acoustic)","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"xSrEQSKLJh0","","Wicked Garden (letterman)","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"GNk6Por8iq8","","Wicked Garden (album version)","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
    ]
}

exports.Song = Song;
exports.getDefaultSongs = getDefaultSongs;