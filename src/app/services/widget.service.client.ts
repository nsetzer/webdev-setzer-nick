
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { Widget } from '../objects/widget.object'

@Injectable()

export class WidgetService {

  baseUrl = environment.baseUrl;

  widgets = Widget.getDefaultWidgets();

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget,
    'uploadImage' : this.uploadImage,
    'sortWidget' : this.sortWidget
  };

  constructor(private _http: Http) {
  }

  widgetFactory(pageId: string, type: string) {
    return Widget.widgetFactory("", pageId, type);
  }

  createWidget(pageId, widget) {
    /*
    adds the widget parameter instance to the local widgets array.
    The new widget's pageId is set to the pageId parameter
    */
    return this._http.post(this.baseUrl + `/api/page/${pageId}/widget`, widget)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findWidgetsByPageId(pageId) {
    /*
    retrieves the widgets in local widgets array whose
    pageId matches the parameter pageId
    */
    return this._http.get(this.baseUrl + `/api/page/${pageId}/widget`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findWidgetById(widgetId) {
    /*
    retrieves the widget in local widgets array whose
    _id matches the widgetId parameter
    */
    return this._http.get(this.baseUrl + `/api/widget/${widgetId}`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  updateWidget(widgetId, widget) {
    /*
    updates the widget in local widgets array whose
    _id matches the widgetId parameter
    */
    return this._http.put(this.baseUrl + `/api/widget/${widgetId}`, widget)
     .map(
       (res: Response) => {
         return;
       }
     );
  }

  deleteWidget(widgetId) {
    /*
    removes the widget from local widgets array whose
    _id matches the widgetId parameter
    */
    return this._http.delete(this.baseUrl + `/api/widget/${widgetId}`)
     .map(
       (res: Response) => {
         return;
       }
     );
  }

  uploadImage(form: FormData) {
    return this._http.post(this.baseUrl + "/api/upload", form).map(
       (res: Response) => {
         const data = res.json();
         var url = this.baseUrl + data.url;
         return url;
       }
     );
  }

  sortWidget(event) {
    var from = event.startIndex;
    var to = event.endIndex;
    var pid = event.pid;

    return this._http.put(this.baseUrl + `/api/page/${pid}/widget?from=${from}&to=${to}`, {})
     .map(
       (res: Response) => {
        if (res.ok) {
          return res.json();
        } else {
          return;
        }
       }
     );
  }

}



