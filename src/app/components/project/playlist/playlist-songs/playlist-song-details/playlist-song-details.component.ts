import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../../../services/playlist.service.client';
import { ProjectService } from '../../../../../services/project.service.client';
import { DomSanitizer} from '@angular/platform-browser';

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
  playlist : any = []
  private sub: any;
  playlists= [];

  constructor(private route: ActivatedRoute,
              private router: Router,
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
    this._plservice.findPlaylistById(this.plid).subscribe(
        (lst) => {
            this.playlist = lst;
            this.song = lst.songs[this.idx];

            /*
            if (this.song.videoId) {
              this._pservice.findPlaylistsContaining(this.song.videoId).subscribe(
                (lists) => { this.playlists = lists },
                (err) => {}
              )
            }
            */

        }
    );
  }

  saveChanges() {
    this.playlist[this.idx] = this.song
    this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(
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
