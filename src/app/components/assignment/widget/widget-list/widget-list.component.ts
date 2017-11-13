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
  error_message: string = ""

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
    this._service.findWidgetsByPageId(this.pid).subscribe(
      (widgets) => {
        this.widgets = widgets
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  sortWidget(event) {
    event.uid = this.uid
    event.wid = this.wid
    event.pid = this.pid
    this._service.sortWidget(event).subscribe(
        (res) => {},
        (err) => {
          let msg = JSON.parse(err._body)
          this.error_message = msg.message;
        }
    );
  }

}
