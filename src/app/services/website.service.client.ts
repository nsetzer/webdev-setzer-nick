
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { Website } from '../objects/website.object'

@Injectable()

export class WebsiteService {

  baseUrl = environment.baseUrl;

  nextId : number = 1000;

  sites = Website.getDefaultSites();

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  constructor(private _http: Http) {
  }

  createWebsite(userId, website) {
    /*
    adds the website parameter instance to the local websites array.
    The new website's developerId is set to the userId parameter
    */
    return this._http.post(this.baseUrl + `/api/user/${userId}/website`, website)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findWebsitesByUser(userId) {
    /*
    retrieves the websites in local websites array whose
    developerId matches the parameter userId
    */
    return this._http.get(this.baseUrl + `/api/user/${userId}/website`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findWebsiteById(websiteId) {
    /*
    retrieves the website in local websites array
    whose _id matches the websiteId parameter
    */
    return this._http.get(this.baseUrl + `/api/website/${websiteId}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updateWebsite(websiteId, website) {
    /*
    updates the website in local websites array
    whose _id matches the websiteId parameter
    */
    return this._http.put(this.baseUrl + `/api/website/${websiteId}`, website)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  deleteWebsite(websiteId) {
    /*
     removes the website from local websites array
     whose _id matches the websiteId parameter
     */
    return this._http.delete(this.baseUrl + `/api/website/${websiteId}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}



