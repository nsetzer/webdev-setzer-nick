
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
        Song('',"Z0GFRcFm-aY","",
             "R.E.M. - It's The End Of The World (And I feel Fine)","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"YLmIlVJYEtw","",
             "The White Stripes - You Don't Know What Love Is [You Just Do As You're Told]","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"p9n9gW1wCks","",
             "Mother Love Bone - Stargazer","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"2oPeZFOpPAM","",
             "Stone Temple Pilots - Wicked Garden","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"RRNVrel3ezg","",
             "Stone Temple Pilots - Piece of Pie","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"tXhmwMdUKfA","",
             "Stone Temple Pilots - Plush","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"SKUJLGBKt_M","",
             "Blind Melon - Change (acoustic)","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"3TP0iJSzLxU","",
             "Bully - Milkman","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"sNh-iw7gsuI","",
             "Soundgarden - Outshined","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
        Song('',"EU4L6THYAbM","",
             "Soundgarden 4th of july","",
             "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
    ]
}

exports.Song = Song;
exports.getDefaultSongs = getDefaultSongs;