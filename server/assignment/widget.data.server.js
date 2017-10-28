
function Widget(_id, name, pageId) {
    return {
        "_id": _id,
        "name": name,
        "pageId": pageId,
        "index" : 0
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

async function getDefaultWidgets(model) {

  var pages = await model.PageModel.find();

  var widgets = []

  for (let i=0; i < pages.length; i++) {

    widgets.push(newHeadingWidget(
      "", "", pages[i]._id, 2, "HEADING " + i));

    widgets.push(newHTMLWidget(
      "", "", pages[i]._id, "<b>Lorem</b> <i>ipsum</i>"));

    widgets.push(newHeadingWidget(
      "", "", pages[i]._id, 2, "HEADING " + i));

    widgets.push(newHTMLWidget(
      "", "", pages[i]._id, "<b>Lorem</b> <i>dolar</i>"));

    widgets.push(newImageWidget(
      "", "", pages[i]._id, "100%",
      "http://lorempixel.com/400/200/"));

    widgets.push(newYoutubeWidget(
      "", "", pages[i]._id, "100%",
      "https://www.youtube.com/embed/AM2Ivdi9c4E"));
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