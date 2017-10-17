import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../../../../services/flickr.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../../../../environments/environment'

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

  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: FlickrService,
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

  searchPhotos() {

    if (!searchText) {
        // todo errors
        return;
    }

    this._service
      .searchPhotos(this.searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
          console.log(this.photos);
        }
        (err) => {
        }
      );
  }

  selectPhoto(photo) {
    console.log(photo);
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;
    // TODO update widget
  }

}
