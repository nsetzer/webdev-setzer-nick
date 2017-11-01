module.exports = function(mongoose, WidgetSchema, PageModel) {
    let model = mongoose.model("WidgetModel", WidgetSchema);

    model.createWidget = async function(pageId, widget) {
        if (widget._id || widget._id==='') {
            delete widget._id;
        }

        widget.pageId = pageId;

        let result = await model.create(widget)

        if (result) {
            await PageModel.update( {_id:pageId},
                { $push: { widgets: result._id } })
            return result;
        }

        return null
    }

    function reorder(truth, data) {
        var out = []
        for (let x = 0; x < truth.length; x++) {
            for (let y = 0; y < data.length; y++) {
                if (data[y]._id.equals(truth[x])) {
                    out.push(data.splice(y, 1)[0])
                    break;
                }
            }
        }
        return out;
    }

    model.findAllWidgetsForPage = async function(pageId) {
        let pages = await PageModel.find({_id:pageId})
        if (pages) {
            let page = pages[0]
            let widgets = await model.find({_id: {$in: page.widgets}});
            widgets = reorder(page.widgets, widgets);
            return widgets;
        }
        return [];
    }

    model.findWidgetById = async function(widgetId) {
        let widgets = await model.find({_id:widgetId})
        if (widgets && widgets.length>0) {
            return widgets[0]
        }
        return null
    }

    model.updateWidget = function(widgetId, widget) {
        if (widget._id || widget._id==='') {
            delete widget._id;
        }
        return model.update({_id:widgetId},widget)
    }

    model.deleteWidget = async function(widgetId) {
        let widgets = await model.find({_id:widgetId})
        if (widgets) {
            await model.remove({_id:widgetId})
            await PageModel
                    .update({_id:widgets[0].pageId},
                            { $pull: { widgets: widgetId } });
            return true;
        }
        return false;
    }

    model.reorderWidget = async function(pid, from, to) {

        let pages = await PageModel.find({_id:pid})
        if (pages) {
            let page = pages[0];
            let items = page.widgets;

            if ( from < 0 || from >= items.length) {
                return false;
            }

            if ( to < 0 || to >= items.length) {
                return false;
            }

            items.splice(to, 0, items.splice(from, 1)[0]);

            page.widgets = items;

            await PageModel.update({_id:pid}, page)

            return true;
        }

        return false;
    }

    return model;
}