
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class WidgetService {

  baseUrl = environment.baseUrl;

  nextId : number = 1000;

  widgets : any = [
    { "_id": "123", "widgetType": "HEADING", "name": "", pageId: "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "name": "", pageId: "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE",   "name": "", pageId: "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML",    "name": "", pageId: "321", "text": "<p>Lorem ipsum</p>"},
    { "_id": "567", "widgetType": "HEADING", "name": "", pageId: "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "name": "", pageId: "321", "width": "100%", "url": "https://www.youtube.com/embed/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML",    "name": "", pageId: "321", "text": "<p>Lorem ipsum</p>"}
  ]

  api = {
    'widgetFactory'   : this.widgetFactory,
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  constructor(private _http: Http) {


    var pages = [432,543,
                 100,101,102,
                 110,111,112,
                 120,121,122,
                 130,131,132,
                 140,141,142,
                 150,151,152 ]
    for (let i=0; i < pages.length; i++) {

      this.widgets.push({
        _id: "" + this.nextId,
        name: "Widget " + this.nextId,
        pageId: "" + pages[i],
        widgetType: "HEADING",
        size: 2,
        text: "HEADING " + this.nextId
      });
      this.nextId = this.nextId + 1;

      this.widgets.push({
        _id: "" + this.nextId,
        name: "Widget " + this.nextId,
        pageId: "" + pages[i],
        widgetType: "IMAGE",
        width: "100%",
        url: "http://lorempixel.com/400/200/"
      });
      this.nextId = this.nextId + 1;

      this.widgets.push({
        _id: "" + this.nextId,
        name: "Widget " + this.nextId,
        pageId: "" + pages[i],
        widgetType: "YOUTUBE",
        width: "100%",
        url: "https://www.youtube.com/embed/AM2Ivdi9c4E"
      });
      this.nextId = this.nextId + 1;

      this.widgets.push({
        _id: "" + this.nextId,
        name: "Widget " + this.nextId,
        pageId: "" + pages[i],
        widgetType: "HTML",
        text: "<b>Lorem</b> <i>ipsum</i>"
      });
      this.nextId = this.nextId + 1;
    }


  }

  widgetFactory(pageId, type: string) {
    /*
    creates and returns a new widget given the type of widget to create
    The new widget's pageId is set to the pageId parameter
    */
    let widget = {
        _id : "" + this.nextId,
        widgetType: type,
        pageId: pageId,
        name: "",
    }
    if (type === "IMAGE" || type === "YOUTUBE") {
      widget["width"] = "";
      widget["url"] = "";
    }
    if (type === "HEADING" || type === "HTML") {
      widget["text"] = "";
    }
    if (type === "HEADING") {
      widget["size"] = 2;
    }

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



