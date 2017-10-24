import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class SocialService {

  baseUrl = environment.baseUrl;

  constructor(private _http: Http) {
  }

  follow(uid,puid) {
    return this._http.put(this.baseUrl + `/api/user/${uid}/social/${puid}`, null)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  unfollow(uid, puid) {
    return this._http.delete(this.baseUrl + `/api/user/${uid}/social/${puid}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  // return true if uid connects to puid
  isConnectedTo(uid,puid) {
    return this._http.get(this.baseUrl +
     `/api/user/${uid}/social/${puid}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  getFollowers(uid) {
    return this._http.get(this.baseUrl +
     `/api/user/${uid}/social`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  sendNotification(userId, message) {
    return this._http.post(this.baseUrl +
     `/api/user/${userId}/notifications`, message)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  getNotifications(userId) {
    /*
    retrieves the websites in local websites array whose
    developerId matches the parameter userId
    */
    return this._http.get(this.baseUrl +
     `/api/user/${userId}/notifications`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  // rate a given playlist for a user on a 5 point scale
  // any user can rate any playlist
  rateList(uid,plid,value) {
    return this._http.put(this.baseUrl +
     `/api/user/${uid}/rate/${plid}`, {"value":value})
     .map(
       (res: Response) => {
         return;
       }
     );
  }

  // remove a rating for a playlist for a given user
  unrateList(uid,plid) {
    return this._http.delete(this.baseUrl +
     `/api/user/${uid}/rate/${plid}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }


}

