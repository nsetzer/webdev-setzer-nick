import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../../../../services/flickr.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../../../../environments/environment'
import { WidgetService } from '../../../../../../services/widget.service.client';
import { Widget } from '../../../../../../objects/widget.object';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  searchText : string = "";

  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";
  widget : Widget = new Widget('','','');
  photos : any = []

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _wservice: WidgetService,
              private _service: FlickrService,
              private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.wid = params['wid'];
       this.pid = params['pid'];
       this.wgid = params['wgid'];

       // TODO: if wgid is not a image widget, redirect

       this.reload();
    });
  }

  reload() {

    this._wservice.findWidgetById(this.wgid).subscribe(
      (widget) => { this.widget = widget },
      (err) => {}
    );
  }

  searchPhotos() {

    if (!this.searchText) {
        // todo errors
        return;
    }

    this._service
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          this.photos = data;
        },
        (err) => {
        }
      );
  }

  selectPhoto(photo) {

    this.widget.url = photo.url;

    this._wservice.updateWidget(this.wgid, this.widget).subscribe(
      (widget) => {
        let url = "/user/" + this.uid +
                  "/website/" + this.wid +
                  "/page/" + this.pid +
                  "/widget/" + this.wgid;
        this.router.navigate([url]);
      },
      (err) => {
      }
    );

  }

}
