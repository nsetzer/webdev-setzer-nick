
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

function getDefaultSongs() {
    return [
        Song(100,"Yn1WbBaWTdc","","Title1","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song(101,"2oPeZFOpPAM","","Title2","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song(102,"9lZgHdOU-ko","","Title3","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song(103,"xSrEQSKLJh0","","Title4","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song(104,"GNk6Por8iq8","","Title5","","https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
    ]
}

exports.Song = Song;
exports.getDefaultSongs = getDefaultSongs;