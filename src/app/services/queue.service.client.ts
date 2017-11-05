import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { Song } from '../objects/song.object';
import { Playlist } from '../objects/playlist.object';

@Injectable()

export class QueueService {

    baseUrl = environment.baseUrl;

    api = {
      'setQueue'    : this.setQueue,
      'getQueue'    : this.getQueue,
      'currentSong' : this.currentSong,
      'nextSong'    : this.nextSong
    };

    constructor(private _http: Http) {
    }

    private queueUpdatedSource = new Subject<any>();

    queueChangedEvent = this.queueUpdatedSource.asObservable();

    queueChanged() {
        this.queueUpdatedSource.next(null);
    }

    setQueue(uid,playlist) {
      return this._http.put(this.baseUrl + `/api/user/${uid}/queue`, playlist)
        .map(
          (res: Response) => {
            this.queueChanged();
            const data = res.json();
            return data;
          }
        );
    }

    getQueue(uid) {
      return this._http.get(this.baseUrl + `/api/user/${uid}/queue`)
        .map(
          (res: Response) => {
            const data = res.json();
            return data;
          }
        );
    }

    currentSong(uid) {
      return this._http.get(this.baseUrl + `/api/user/${uid}/queue/head`)
        .map(
          (res: Response) => {
            let data = res.json();
            data.url = this.baseUrl + data.url

            return data;
          }
        );
    }

    nextSong(uid) {
      return this._http.delete(this.baseUrl + `/api/user/${uid}/queue/head`)
        .map(
          (res: Response) => {
            let data = res.json();
            data.url = this.baseUrl + data.url
            return data;
          }
        );
    }
}