
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
    widget._id = "" + this.nextId;
    this.nextId = this.nextId + 1;
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId) {
    /*
    retrieves the widgets in local widgets array whose
    pageId matches the parameter pageId
    */
    var widgets = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        widgets.push(this.widgets[x]);
      }
    }
    return widgets;
  }

  findWidgetById(widgetId) {
    /*
    retrieves the widget in local widgets array whose
    _id matches the widgetId parameter
    */
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId, widget) {
    /*
    updates the widget in local widgets array whose
    _id matches the widgetId parameter
    */
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets[x] = widget// todo ?
      }
    }
  }

  deleteWidget(widgetId) {
    /*
    removes the widget from local widgets array whose
    _id matches the widgetId parameter
    */
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1)
      }
    }
  }

}



