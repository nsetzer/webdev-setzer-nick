
function Widget(_id, name, pageId) {
    return {
        "_id": _id,
        "name": name,
        "pageId": pageId
    };
}

function newHeadingWidget(_id, name, pageId, size, text) {
    let widget = Widget(_id,name,pageId);
    widget.widgetType = "HEADING";
    widget.size = size;
    widget.text = text;
    return widget;
}

function newImageWidget(_id, name, pageId, width, url) {
    let widget = Widget(_id,name,pageId);
    widget.widgetType = "IMAGE";
    widget.width = width;
    widget.url = url;
    return widget;
}

function newYoutubeWidget(_id, name, pageId, width, url) {
    let widget = Widget(_id,name,pageId);
    widget.widgetType = "YOUTUBE";
    widget.width = width;
    widget.url = url;
    return widget;
}

function newHTMLWidget(_id, name, pageId, text) {
    let widget = Widget(_id,name,pageId);
    widget.widgetType = "HTML";
    widget.text = text;
    return widget;
}

function widgetFactory(wgid, pageId, type) {
  /*
  creates and returns a new widget given the type of widget to create
  The new widget's pageId is set to the pageId parameter
  */
  let widget = Widget(wgid, "", pageId);

  if (type === "IMAGE" || type === "YOUTUBE") {
    widget.width = "";
    widget.url = "";
  }
  if (type === "HEADING" || type === "HTML") {
    widget.text = "";
  }
  if (type === "HEADING") {
    widget.size = 2;
  }

  return widget;
}

function getDefaultWidgets() {

  let widgets = [
    newHeadingWidget( "123", "", "321", 2, "GIZMODO"),
    newHeadingWidget( "234", "", "321", 4, "Lorem ipsum"),
    newHeadingWidget( "567", "", "321", 4, "Lorem ipsum"),
    newImageWidget(  "345", "", "321", "100%", "http://lorempixel.com/400/200/"),
    newYoutubeWidget("678", "", "321", "100%", "https://www.youtube.com/embed/AM2Ivdi9c4E"),
    newHTMLWidget( "456", "", "321", "<p>Lorem ipsum</p>"),
    newHTMLWidget( "789", "", "321", "<p>Lorem ipsum</p>")
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

    widgets.push(newHeadingWidget(
      "" + nextId, "", "" + pages[i], 2, "HEADING " + nextId));
    nextId = nextId + 1;

    widgets.push(newImageWidget(
      "" + nextId, "", "" + pages[i], "100%",
      "http://lorempixel.com/400/200/"));
    nextId = nextId + 1;

    widgets.push(newYoutubeWidget(
      "" + nextId, "", "" + pages[i], "100%",
      "https://www.youtube.com/embed/AM2Ivdi9c4E"));
    nextId = nextId + 1;

    widgets.push(newHTMLWidget(
      "" + nextId, "", "" + pages[i], "<b>Lorem</b> <i>ipsum</i>"));
    nextId = nextId + 1;

  }

  return widgets;
}


exports.Widget = Widget;
exports.newHeadingWidget = newHeadingWidget;
exports.newImageWidget = newImageWidget;
exports.newYoutubeWidget = newYoutubeWidget;
exports.newHTMLWidget = newHTMLWidget;
exports.widgetFactory = widgetFactory;
exports.getDefaultWidgets = getDefaultWidgets;