import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../../services/widget.service.client';
import { Widget } from '../../../../../objects/widget.object';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  error_message : string = ""

  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : Widget = new Widget('','','');
  invalid_name = false

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
    if (this.widget.name === "") {
      this.invalid_name = true
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
