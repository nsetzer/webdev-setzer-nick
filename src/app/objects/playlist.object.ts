
import { Song } from './song.object';

export class Playlist {

    _id : string;
    userid : string;      // foreign key to user
    name : string;
    songs: Array<Song>; // list of foreign keys -- song _ids

    constructor(_id : string, name: string, userid: string) {
        this._id = _id;
        this.userid = userid;
        this.name = name;
        this.songs = new Array<Song>();
    }

    setList(lst : Array<Song>) {
      this.songs = lst;
    }

    static createDemoPlaylist(userid : string, plid : string) {
        var lst = new Playlist(plid, "Default Playlist", userid);
        lst.setList(Song.getDefaultSongs());
        return lst;
    }

}