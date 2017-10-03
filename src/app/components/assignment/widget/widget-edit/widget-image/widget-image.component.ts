import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../../services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css',
              '../../../../../../assets/css/style.css']
})

export class WidgetImageComponent implements OnInit {


  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : {widgetType:"None", width:"100%"};

  invalid_width: boolean = false;

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

    if (!this.widget.width.endsWith("px") &&
        !this.widget.width.endsWith("%")) {
        this.invalid_width = true;
        return
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
