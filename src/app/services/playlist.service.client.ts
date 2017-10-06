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

  constructor(private _http: Http) {
  }

  createPlaylist(userId, lst : any) {
    lst._id = "" + this.nextId;
    this.nextId = this.nextId + 1;
    lst.userId = userId;
    this.playlists.push(lst);
    return lst;
  }

  findPlaylistsByUser(userid: string) {
    console.log(this.playlists)
    return this.playlists.filter( lst => lst.userid === userid );
  }

  findPlaylistById(plid: string) {
    for (let x = 0; x < this.playlists.length; x++) {
      if (this.playlists[x]._id === plid) {
        return this.playlists[x];
      }
    }
  }

  updatePlaylist(plid: string, lst: Playlist) {
    for (let x = 0; x < this.playlists.length; x++) {
      if (this.playlists[x]._id === plid) {
        lst._id = this.playlists[x]._id;
        this.playlists[x] = lst;
      }
    }
  }

  deletePlaylist(plid : string) {
    for (let x = 0; x < this.playlists.length; x++) {
      if (this.playlists[x]._id === plid) {
        this.playlists.splice(x, 1)
      }
    }
  }

}

