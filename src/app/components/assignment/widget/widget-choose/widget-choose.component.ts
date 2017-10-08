import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-choose',
  templateUrl: './widget-choose.component.html',
  styleUrls: ['./widget-choose.component.css']
})
export class WidgetChooseComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pid : string = "";
  widgets : any = [];

  widget_types = [
    "Heading",
    "Label",
    "HTML",
    "Text",
    "Link",
    "Button",
    "Image",
    "Youtube",
    "Table",
    "Repeater"
  ]

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: WidgetService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.wid = params['wid'];
       this.pid = params['pid'];

       this.reload();
    });
  }

  reload() {

  }

  newWidget(kind:string) {
    kind = kind.toUpperCase();

    if (kind == "HEADING" ||
        kind == "HTML" ||
        kind == "IMAGE" ||
        kind == "YOUTUBE") {
        let widget = this._service.widgetFactory(this.pid,kind)
        let url = "/user/" + this.uid +
                  "/website/" + this.wid +
                  "/page/" + this.pid +
                  "/widget/" + widget._id;
        this.router.navigate([url]);
    }

  }

}
