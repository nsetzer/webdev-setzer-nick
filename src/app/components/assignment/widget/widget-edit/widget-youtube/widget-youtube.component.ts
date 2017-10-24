import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../../services/widget.service.client';
import { Widget } from '../../../../../objects/widget.object';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})

export class WidgetYoutubeComponent implements OnInit {


  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : Widget = new Widget('','','');
  error_message: string = ""

  invalid_width: boolean = false;
  invalid_link: boolean = false;

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
       this.wgid = params['wgid'];

       this.reload();
    });
  }

  reload() {
    this._service.findWidgetById(this.wgid).subscribe(
      (widget) => { this.widget = widget },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

  saveChanges() {

    this.invalid_width = false;
    this.invalid_link = false;

    if (!this.widget.width.endsWith("px") &&
        !this.widget.width.endsWith("%")) {
        this.invalid_width = true;
        return
    }

    if (!this.widget.url) {
      this.invalid_link = true;
      return;
    }

    this._service.updateWidget(this.wgid, this.widget).subscribe(
      (widget) => {
        let url = "/user/" + this.uid +
                  "/website/" + this.wid +
                  "/page/" + this.pid +
                  "/widget";
        this.router.navigate([url]);
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

  delete() {
    this._service.deleteWidget(this.wgid).subscribe(
      (widget) => {
        let url = "/user/" + this.uid +
                  "/website/" + this.wid +
                  "/page/" + this.pid +
                  "/widget";
        this.router.navigate([url]);
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

}
