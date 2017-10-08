import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pid : string = "";
  widgets : any = [];

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
    this.widgets = this._service.findWidgetsByPageId(this.pid)
  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
