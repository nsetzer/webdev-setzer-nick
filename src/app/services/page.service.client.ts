
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { Page } from '../objects/page.object'

@Injectable()

export class PageService {

  baseUrl = environment.baseUrl;

  nextId : number = 1000;

  pages = Page.getDefaultPages();

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



