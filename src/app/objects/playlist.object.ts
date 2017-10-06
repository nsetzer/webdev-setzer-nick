
import { Song } from './song.object';

export class Playlist {

    _id : string;
    userid : string;      // foreign key to user
    songs: Array<string>; // list of foreign keys -- song _ids

    constructor(_id : string, userid: string) {
        this._id = _id;
        this.userid = userid;
        this.songs = new Array<string>();
    }

    setList(lst : Array<string>) {
      this.songs = lst;
    }

    static createDemoPlaylist(userid : string, plid : string) {
        var lst = new Playlist(plid, userid);
        lst.setList(Song.getDefaultSongs().map(song => song._id));
        return lst;
    }

}