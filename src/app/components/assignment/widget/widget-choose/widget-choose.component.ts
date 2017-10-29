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
  error_message: string = ""

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
    /*
    todo: can I move the factory into the server?
          use a request with pageid and kind?
    */

    kind = kind.toUpperCase();

    if (kind == "HEADING" ||
        kind == "HTML" ||
        kind == "IMAGE" ||
        kind == "YOUTUBE" ||
        kind == "TEXT") {
        let widget = this._service.widgetFactory(this.pid,kind)

        this._service.createWidget(this.pid,widget).subscribe(
          (res) => {
            let url = "/user/" + this.uid +
                      "/website/" + this.wid +
                      "/page/" + this.pid +
                     "/widget/" + res._id;
            console.log(url)
            this.router.navigate([url]);
          },
          (err) => {
            let msg = JSON.parse(err._body)
            this.error_message = msg.message.message;
          }
        );
    } else {
      this.error_message = kind + " not supported.";
    }
  }

}
