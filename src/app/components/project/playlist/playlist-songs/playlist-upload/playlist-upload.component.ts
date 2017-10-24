import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaylistService } from '../../../../../services/playlist.service.client';
import { environment } from '../../../../../../environments/environment'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-upload',
  templateUrl: './playlist-upload.component.html',
  styleUrls: ['./playlist-upload.component.css']
})
export class PlaylistUploadComponent implements OnInit {

  baseUrl = environment.baseUrl;

  uid : string = "";
  plid : string = "";
  artist : string = "";
  title  : string = "";
  description : string = "";
  private sub: any;

  @ViewChild('myFile') myFile;
  @ViewChild('myForm') myForm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.plid = params['plid'];
       this.reload();
    });
  }

  reload() {

  }

  uploadAudio() {
    const myFile = this.myFile.nativeElement;
    const myForm = this.myForm.nativeElement;
    if (myFile.files && myFile.files[0]) {
      const formData = new FormData();
      formData.append('myFile', myFile.files[0]);
      formData.append('artist', this.artist)
      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('baseUrl', this.baseUrl)
      formData.append('plid', this.plid)
      formData.append('uid', this.uid)
      this._service.uploadAudio(formData).subscribe(
         (song) => {

            console.log("got here")

            let url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/songs)"
            this.router.navigateByUrl(url);


         },
         (err) => {
          //this.invalid_file = true
          myForm.reset();
         }
      );
    } else {
      //this.invalid_file = true;
    }
  }

}
