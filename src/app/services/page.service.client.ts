
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
    return this._http.post(this.baseUrl + `/api/website/${websiteId}/page`, website)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findPagesByWebsiteId(websiteId) {
    /*
    retrieves the pages in local pages array whose
    websiteId matches the parameter websiteId
    */
    return this._http.get(this.baseUrl + `/api/website/${websiteId}/page`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findPageById(pageId) {
    /*
    retrieves the page in local pages array
    whose _id matches the pageId parameter
    */
    return this._http.get(this.baseUrl + `/api/page/${pageId}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updatePage(pageId, page) {
    /*
    updates the page in local pages array whose
    _id matches the pageId parameter
    */
    return this._http.put(this.baseUrl + `/api/page/${pageId}`, page)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  deletePage(pageId) {
    /*
    removes the page from local pages array whose
    _id matches the pageId parameter
    */
    return this._http.delete(this.baseUrl + `/api/page/${pageId}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }


}



