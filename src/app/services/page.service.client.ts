
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class PageService {

  baseUrl = environment.baseUrl;

  nextId : number = 1000;

  pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "title": "Post 1", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "title": "Post 2", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "title": "Post 3", "description": "Lorem" },
    { "_id": "100", "name": "Post 1", "websiteId": "123", "title": "Post 1", "description": "Lorem" },
    { "_id": "101", "name": "Post 2", "websiteId": "123", "title": "Post 2", "description": "Lorem" },
    { "_id": "102", "name": "Post 3", "websiteId": "123", "title": "Post 3", "description": "Lorem" },
    { "_id": "110", "name": "Post 1", "websiteId": "234", "title": "Post 1", "description": "Lorem" },
    { "_id": "111", "name": "Post 2", "websiteId": "234", "title": "Post 2", "description": "Lorem" },
    { "_id": "112", "name": "Post 3", "websiteId": "234", "title": "Post 3", "description": "Lorem" },
    { "_id": "120", "name": "Lang"  , "websiteId": "890", "title": "Post 1", "description": "Lorem" },
    { "_id": "121", "name": "Game", "websiteId": "890", "title": "Post 2", "description": "Lorem" },
    { "_id": "122", "name": "Home" , "websiteId": "890", "title": "Post 3", "description": "Lorem" },
    { "_id": "130", "name": "Easy", "websiteId": "567", "title": "Post 1", "description": "Lorem" },
    { "_id": "131", "name": "Medium", "websiteId": "567", "title": "Post 2", "description": "Lorem" },
    { "_id": "132", "name": "Hard", "websiteId": "567", "title": "Post 3", "description": "Lorem" },
    { "_id": "140", "name": "Post 1", "websiteId": "678", "title": "Post 1", "description": "Lorem" },
    { "_id": "141", "name": "Post 2", "websiteId": "678", "title": "Post 2", "description": "Lorem" },
    { "_id": "142", "name": "Post 3", "websiteId": "678", "title": "Post 3", "description": "Lorem" },
    { "_id": "150", "name": "Post 1", "websiteId": "789", "title": "Post 1", "description": "Lorem" },
    { "_id": "151", "name": "Post 2", "websiteId": "789", "title": "Post 2", "description": "Lorem" },
    { "_id": "152", "name": "Post 3", "websiteId": "789", "title": "Post 3", "description": "Lorem" }

  ]

  api = {
    'createPage'   : this.createPage,
    'findPagesByWebsiteId' : this.findPagesByWebsiteId,
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
    page._id = "" + this.nextId;
    this.nextId = this.nextId + 1;
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }

  findPagesByWebsiteId(websiteId) {
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
    for (let x = 0; x < this.pages.length; x++) {
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



