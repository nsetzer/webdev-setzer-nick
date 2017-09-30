
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class PageService {

  baseUrl = environment.baseUrl;

  pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ]

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  constructor(private _http: Http) {
  }

  createPage(websiteId, page) {
    /*
    adds the page parameter instance to the local pages array.
    The new page's websiteId is set to the websiteId parameter
    */
    page._id = Math.random();
    page.websiteId = websiteId;
    this.pages.push(website);
    return page;
  }

  findPageByWebsiteId(websiteId) {
    /*
    retrieves the pages in local pages array whose
    websiteId matches the parameter websiteId
    */
    var pages = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pages.push(this.pages[x]);
      }
    }
    return pages;
  }

  findPageById(pageId) {
    /*
    retrieves the page in local pages array
    whose _id matches the pageId parameter
    */
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updatePage(pageId, page) {
    /*
    updates the page in local pages array whose
    _id matches the pageId parameter
    */
    for (let x = 0; x < this.sites.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x].name = page.name;
        this.pages[x].description = page.description;
        this.pages[x].websiteId = page.websiteId; // todo ?
      }
    }
  }

  deletePage(pageId) {
    /*
    removes the page from local pages array whose
    _id matches the pageId parameter
    */
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1)
      }
    }
  }


}



