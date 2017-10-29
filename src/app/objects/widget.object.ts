
export class Widget {

    _id:         string;
    pageId:      string;
    widgetType:  string;
    name:        string;
    title:       string;
    text:        string;
    placeholder: string;
    formatted:   boolean;
    url:         string;
    size:        number;
    rows:        number;
    width:       string;

    constructor(_id: string, name: string, pageId: string) {
        this._id = _id;
        this.name = name;
        this.pageId = pageId;
        this.widgetType = "NONE";
    }

    static newHeadingWidget(_id: string, name: string, pageId: string, size: number, text: string) {
        let widget = new Widget(_id,name,pageId);
        widget.widgetType = "HEADING";
        widget.size = size;
        widget.text = text;
        return widget;
    }

    static newImageWidget(_id: string, name: string, pageId: string, width: string, url: string) {
        let widget = new Widget(_id,name,pageId);
        widget.widgetType = "IMAGE";
        widget.width = width;
        widget.url = url;
        return widget;
    }

    static newYoutubeWidget(_id: string, name: string, pageId: string, width: string, url: string) {
        let widget = new Widget(_id,name,pageId);
        widget.widgetType = "YOUTUBE";
        widget.width = width;
        widget.url = url;
        return widget;
    }

    static newHTMLWidget(_id: string, name: string, pageId: string, text: string) {
        let widget = new Widget(_id,name,pageId);
        widget.widgetType = "HTML";
        widget.text = text;
        return widget;
    }

    static newTextWidget(_id: string, name: string, pageId: string, text: string) {
        let widget = new Widget(_id,name,pageId);
        widget.widgetType = "TEXT";
        widget.text = text;
        widget.placeholder = "";
        widget.rows = 3;
        widget.formatted = false;
        return widget;
    }


    static widgetFactory(wgid: string, pageId: string, type: string) {
      /*
      creates and returns a new widget given the type of widget to create
      The new widget's pageId is set to the pageId parameter
      */
      let widget = new Widget(wgid, "", pageId);
      widget.widgetType = type;

      if (type === "IMAGE" || type === "YOUTUBE") {
        widget.width = "100%";
        widget.url = "";
      }
      if (type === "HEADING" || type === "HTML") {
        widget.text = "";
      }
      if (type === "HEADING") {
        widget.size = 2;
      }
      if (type === "TEXT") {
        widget.text = "";
        widget.placeholder = "";
        widget.rows = 3;
        widget.formatted = false;
      }

      return widget;
    }


    static getDefaultWidgets() {

      let widgets = [
        Widget.newHeadingWidget( "123", "", "321", 2, "GIZMODO"),
        Widget.newHeadingWidget( "234", "", "321", 4, "Lorem ipsum"),
        Widget.newHeadingWidget( "567", "", "321", 4, "Lorem ipsum"),
        Widget.newImageWidget(  "345", "", "321", "100%", "http://lorempixel.com/400/200/"),
        Widget.newYoutubeWidget("678", "", "321", "100%", "https://www.youtube.com/embed/AM2Ivdi9c4E"),
        Widget.newHTMLWidget( "456", "", "321", "<p>Lorem ipsum</p>"),
        Widget.newHTMLWidget( "789", "", "321", "<p>Lorem ipsum</p>")
      ]

      var pages = [432,543,
                 100,101,102,
                 110,111,112,
                 120,121,122,
                 130,131,132,
                 140,141,142,
                 150,151,152 ];

      let nextId = 800;

      for (let i=0; i < pages.length; i++) {

        widgets.push(Widget.newHeadingWidget(
          "" + nextId, "", "" + pages[i], 2, "HEADING " + nextId));
        nextId = nextId + 1;

        widgets.push(Widget.newImageWidget(
          "" + nextId, "", "" + pages[i], "100%",
          "http://lorempixel.com/400/200/"));
        nextId = nextId + 1;

        widgets.push(Widget.newYoutubeWidget(
          "" + nextId, "", "" + pages[i], "100%",
          "https://www.youtube.com/embed/AM2Ivdi9c4E"));
        nextId = nextId + 1;

        widgets.push(Widget.newHTMLWidget(
          "" + nextId, "", "" + pages[i], "<b>Lorem</b> <i>ipsum</i>"));
        nextId = nextId + 1;

      }

      return widgets;
    }



}