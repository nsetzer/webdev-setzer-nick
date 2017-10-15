
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { Widget } from '../objects/widget.object'

@Injectable()

export class WidgetService {

  baseUrl = environment.baseUrl;

  nextId : number = 1000;

  widgets = Widget.getDefaultWidgets();

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  constructor(private _http: Http) {
  }

  widgetFactory(pageId: string, type: string) {
    let widget = Widget.widgetFactory("" + this.nextId, pageId, type);
    this.nextId = this.nextId + 1;
    this.widgets.push(widget);
    return widget;
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
    return this._http.put(this.baseUrl + `/api/widget/${widget}`, widget)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
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
         const data = res.json();
         return data;
       }
     );
  }

}



