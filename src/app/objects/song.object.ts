

export class Song {

    _id : string;
    videoId: string;
    description: string;
    title: string;
    artist: string;
    thumbnail: string;

    constructor(_id : string,
                videoId: string,
                description: string,
                title: string,
                artist: string,
                thumbnail: string) {
        this._id = _id;
        this.videoId = videoId;
        this.description = description;
        this.title = title;
        this.artist = artist;
        this.thumbnail = thumbnail;
    }

    static getDefaultSongs() {
        var songs = [ new Song("song:123",
                       "2oPeZFOpPAM",
                       "2006 WMG Wicked Garden (Video)",
                       "Wicked Garden",
                       "Stone Temple Pilots",
                       "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg"),
                      new Song("song:234",
                       "9lZgHdOU-ko",
                       "",
                       "Wicked Garden (live)",
                       "",
                       "https://i.ytimg.com/vi/2oPeZFOpPAM/hqdefault.jpg")
        ]
        return songs;
    }

}