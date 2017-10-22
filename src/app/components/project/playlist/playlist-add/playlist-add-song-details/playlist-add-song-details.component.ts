import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../../../services/playlist.service.client';
import { ProjectService } from '../../../../../services/project.service.client';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-add-song-details',
  templateUrl: './playlist-add-song-details.component.html',
  styleUrls: ['./playlist-add-song-details.component.css']
})

export class PlaylistAddSongDetailsComponent implements OnInit {

  uid     : string;
  plid    : string;
  videoId : any = null;
  idx     : number = 0;
  song : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: ProjectService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       if (params["uid"]) {
         this.uid = params['uid'];
       } else {
         this.uid = null;
       }
       this.plid = params['plid'];
       this.idx = +params['idx'];

       let results = []
       if (params["videoId"]) {
         this.videoId = params['videoId']
         results = this._service.getPreviousRelatedSearch().results;
       } else {
         results = this._service.getPreviousKeywordSearch().results;
       }

       // if the user landed on this page providing invalid arguments, leave
       if (this.idx < 0 || !results || this.idx >= results.length) {
          let url = ""
          if (this.uid) {
            url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/songs)"
          } else {
            url = "/project/search/s"
          }
          this.router.navigateByUrl(url);
       }

       this.reload(results);
    });
  }

  reload(results) {
    this.song = results[this.idx];
    console.log(this.song);
  }

  return() {
    let url = ""
    if (this.uid) {
        url = "/project/(project:user/" + this.uid + "/list/" + this.plid
        if (this.videoId) {
          url += "/add/" + this.videoId
        } else {
          url += "/add"
        }
    } else {
        url = "/project/search/s"
    }
    this.router.navigateByUrl(url);
  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
