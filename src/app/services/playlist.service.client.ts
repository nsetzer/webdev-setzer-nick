import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { Song } from '../objects/song.object';
import { Playlist } from '../objects/playlist.object';
import { User } from '../objects/user.object';

@Injectable()

export class PlaylistService {

  nextId : number = 1000;
  // create a default playlist for all users
  playlists = User.getDefaultUsers().map(user =>
    Playlist.createDemoPlaylist(user._id,"lst:"+user._id));

  baseUrl = environment.baseUrl;

  search_state = {searchTerm:"", results:[]}

  constructor(private _http: Http) {
  }

  createPlaylist(userid, lst : any) {
    return this._http.post(this.baseUrl + `/api/user/${userid}/playlist`, lst)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );

  }

  findPlaylistsByUser(userid: string) {
    return this._http.get(this.baseUrl + `/api/user/${userid}/playlist`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findPlaylistById(plid: string) {
    return this._http.get(this.baseUrl + `/api/playlist/${plid}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updatePlaylist(plid: string, lst: Playlist) {
    return this._http.put(this.baseUrl + `/api/playlist/${plid}`, lst)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  deletePlaylist(plid : string) {
    return this._http.delete(this.baseUrl + `/api/playlist/${plid}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  addSongToPlaylist(plid: string, song : any) {
    return this._http.put(this.baseUrl + `/api/playlist/${plid}/append`, song)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  keywordSearch(keyword:string) {
    var keyword = encodeURIComponent(keyword);
    return this._http.get(this.baseUrl + `/api/playlist?term=${keyword}`)
     .map(
       (res: Response) => {
         const data = res.json();
         this.search_state = {searchTerm:keyword,results:data};
         return data;
       }
     );
  }

  getPreviousKeywordSearch() {
    return this.search_state;
  }

  clearPreviousKeywordSearch() {
    this.search_state = {results:[],searchTerm:""};
  }

  // upload an audio file and return the url for the new resource
  uploadAudio(form: FormData) {
    return this._http.post(this.baseUrl + "/api/upload/audio", form).map(
       (res: Response) => {
         const song = res.json();
         return song;
       }
     );
  }

  findSongsForPlaylist(plid) {
    return this._http.get(this.baseUrl + `/api/playlist/${plid}/songs`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findSongForPlaylist(plid, idx) {
    return this._http.get(this.baseUrl + `/api/playlist/${plid}/songs`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data[idx];
       }
     );
  }

  updateSong(song) {
    return this._http.put(this.baseUrl + `/api/song/${song._id}`, song)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }


  findPlaylistsContaining(vid) {
    return this._http.get(this.baseUrl + `/api/playlist-contains/${vid}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}

