
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class WebsiteService {

  baseUrl = environment.baseUrl;

  nextId : number = 1000;

  sites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
  ]

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
    website._id = "" + this.nextId;
    this.nextId = this.nextId + 1;
    website.developerId = userId;
    this.sites.push(website);
    return website;
  }

  findWebsitesByUser(userId) {
    /*
    retrieves the websites in local websites array whose
    developerId matches the parameter userId
    */
    var sites = [];
    for (let x = 0; x < this.sites.length; x++) {
      if (this.sites[x].developerId === userId) {
        sites.push(this.sites[x]);
      }
    }
    return sites;
  }

  findWebsiteById(websiteId) {
    /*
    retrieves the website in local websites array
    whose _id matches the websiteId parameter
    */
    for (let x = 0; x < this.sites.length; x++) {
      if (this.sites[x]._id === websiteId) {
        return this.sites[x];
      }
    }
  }

  updateWebsite(websiteId, website) {
    /*
    updates the website in local websites array
    whose _id matches the websiteId parameter
    */
    for (let x = 0; x < this.sites.length; x++) {
      if (this.sites[x]._id === websiteId) {
        this.sites[x].name = website.name;
        this.sites[x].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId) {
    /*
     removes the website from local websites array
     whose _id matches the websiteId parameter
     */
     for (let x = 0; x < this.sites.length; x++) {
      if (this.sites[x]._id === websiteId) {
        this.sites.splice(x, 1)
      }
    }
  }

}



