import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../../../services/playlist.service.client';
import { ProjectService } from '../../../../../services/project.service.client';
import { DomSanitizer} from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playlist-song-details',
  templateUrl: './playlist-song-details.component.html',
  styleUrls: ['./playlist-song-details.component.css']
})
export class PlaylistSongDetailsComponent implements OnInit {

  uid     : string;
  plid    : string;
  videoId : any = null;
  idx     : number = 0;
  song : any = {title:"",description:""};
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private _plservice: PlaylistService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.plid = params['plid'];
       this.idx = +params['idx'];

       this.reload();
    });
  }

  reload() {
    // todo make a direct api for this
    this._plservice.findSongForPlaylist(this.plid,this.idx).subscribe(
        (song) => {
            this.song = song;
        }
    );
  }

  back() {
    this.location.back();
  }

  saveChanges() {
    this._plservice.updateSong(this.song).subscribe(
      (res) => {
        let url = "/project/(project:user/" + this.uid + "/list/"+this.plid+"/songs)"
        this.router.navigateByUrl(url);
      }
    );

  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
