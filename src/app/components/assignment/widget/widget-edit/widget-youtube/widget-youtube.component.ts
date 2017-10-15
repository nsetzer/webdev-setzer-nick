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
  widget : Widget;

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
    this.widget = this._service.findWidgetById(this.wgid);
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

    this._service.updateWidget(this.wgid, this.widget);
    let url = "/user/" + this.uid +
              "/website/" + this.wid +
              "/page/" + this.pid +
              "/widget";
    this.router.navigate([url]);
  }

  delete() {
    this._service.deleteWidget(this.wgid);
    let url = "/user/" + this.uid +
              "/website/" + this.wid +
              "/page/" + this.pid +
              "/widget";
    this.router.navigate([url]);
  }

}
