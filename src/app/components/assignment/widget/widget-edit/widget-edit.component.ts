import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../objects/widget.object';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})

export class WidgetEditComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : Widget = new Widget('','','');
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

}
