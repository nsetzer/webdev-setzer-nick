import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../../../services/playlist.service.client';
import { ProjectService } from '../../../../../services/project.service.client';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-search-song-details',
  templateUrl: './playlist-search-song-details.component.html',
  styleUrls: ['./playlist-search-song-details.component.css']
})
export class PlaylistSearchSongDetailsComponent implements OnInit {

  uid     : string;
  puid     : string;
  plid    : string;
  videoId : any = null;
  idx     : number = 0;
  song : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _plservice: PlaylistService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       if (params["uid"]) {
         this.uid = params['uid'];
       } else {
         this.uid = null;
       }
       if (params["puid"]) {
         this.puid = params['puid'];
       } else {
         this.puid = null;
       }
       this.plid = params['plid'];
       this.idx = +params['idx'];

       this.reload();
    });
  }

  reload() {
    // todo make a direct api for this
    this._plservice.findPlaylistById(this.plid).subscribe(
        (lst) => { this.song = lst.songs[this.idx]; }
    );
  }

  return() {
    let url = ""
    if (this.uid) {
        if (this.puid) {
          url = "/project/(project:user/" + this.uid +
              "/profile/" + this.puid + "/" + this.plid;
        } else {
          url = "/project/(project:user/" + this.uid +
              "/list/search/" + this.plid;
        }
    } else {
      if (this.puid) {
        url = "/project/search/user/" + this.puid + "/" + this.plid;
      } else {
        url = "/project/search/pl/"+ this.plid;
      }
    }
    this.router.navigateByUrl(url);
  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
