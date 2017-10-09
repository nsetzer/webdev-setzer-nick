import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../../services/widget.service.client';
import { Widget } from '../../../../../objects/widget.object';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})

export class WidgetHtmlComponent implements OnInit {

uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : Widget;

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
