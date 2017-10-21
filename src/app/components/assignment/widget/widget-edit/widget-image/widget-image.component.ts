import { Component, OnInit, ViewChild } from '@angular/core';
import { WidgetService } from '../../../../../services/widget.service.client';
import { Widget } from '../../../../../objects/widget.object';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../../../environments/environment'

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})

export class WidgetImageComponent implements OnInit {

  baseUrl = environment.baseUrl;

  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : Widget = new Widget('','','');

  @ViewChild('myFile') myFile;
  @ViewChild('myForm') myForm;

  invalid_width: boolean = false;
  invalid_link: boolean = false;
  invalid_file: boolean = false;

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
      (err) => {}
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
      }
    );
  }

  uploadImage() {
    const myFile = this.myFile.nativeElement;
    const myForm = this.myForm.nativeElement;
    if (myFile.files && myFile.files[0]) {
      const formData = new FormData();
      formData.append('myFile', myFile.files[0]);
      this._service.uploadImage(formData).subscribe(
         (url : string) => {
          console.log(url);
          this.widget.url = url;
          myForm.reset();
          this.invalid_file = false;
         },
         (err) => {
          this.invalid_file = true
          myForm.reset();
         }
      );
    } else {
      this.invalid_file = true;
    }
  }

}
