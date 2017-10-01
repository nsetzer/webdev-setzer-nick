import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css',
              '../../../../../assets/css/style.css']
})

export class WidgetListComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pid : string = "";
  widgets : any = [];

  private sub: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: WidgetService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.wid = params['wid'];
       this.pid = params['pid'];

       this.reload();
    });
  }

  reload() {
    console.log("lookup:" + this.uid + " " + this.wid + " " + this.pid)
    this.widgets = this._service.findWidgetsByPageId(this.pid)
    console.log("found:" + this.widgets)
  }

}
