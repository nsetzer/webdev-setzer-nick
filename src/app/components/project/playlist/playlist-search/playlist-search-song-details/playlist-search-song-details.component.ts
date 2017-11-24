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
  song_video_url = ""
  song_video_width = "85%"
  playlists= [];

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

    this._plservice.findSongsForPlaylist(this.plid).subscribe(
        (lst) => {
          this.song = lst[this.idx];

          if (this.song.videoId) {
            this._plservice.findPlaylistsContaining(this.song.videoId).subscribe(
              (lists) => { this.playlists = lists },
              (err) => {}
            )
          }

          if (!this.song.videoId.includes("public")) {
            this.song_video_url = "https://www.youtube.com/embed/" + this.song.videoId
          } else {
            this.song_video_url = ""
          }

          if (!this.song.description) {
            this.song.description = "No Description"
          }

        }
    );
  }

  return() {
    let url = ""
    if (this.uid) {
        if (this.puid) {
          url = "/project/(project:user/" + this.uid +
              "/profile/" + this.puid + "/" + this.plid + ")";
        } else {
          url = "/project/(project:user/" + this.uid +
              "/list/search/" + this.plid + ")";
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

  openPublicPlaylist(playlist) {

    let url = ""
    let plid = playlist._id
    console.log(playlist)

    if (this.uid) {
      if (this.puid) {
        url = "/project/(project:user/" + this.uid +
              "/profile/" + this.puid + "/" + plid + ")";
      } else {
        url = "/project/(project:user/" + this.uid +
              "/list/search/" + plid + ")";
      }
    } else {
      if (this.puid) {
        url = "/project/search/user/" + this.puid + "/" + plid;
      } else {
        url = "/project/search/pl/"+ plid;
      }
    }
    console.log("public " + url)
    this.router.navigateByUrl(url);

  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
