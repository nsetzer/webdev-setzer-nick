import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../../../services/playlist.service.client';
import { ProjectService } from '../../../../../services/project.service.client';
import { QueueService } from '../../../../../services/queue.service.client';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-search-view',
  templateUrl: './playlist-search-view.component.html',
  styleUrls: ['./playlist-search-view.component.css']
})
export class PlaylistSearchViewComponent implements OnInit {

  uid     : string;
  puid    : string;
  plid    : string;
  playlist = {songs:[]}
  queue_success = false
  songs = []
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _plservice: PlaylistService,
              private _qservice: QueueService,
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
       this.reload();
    });
  }

  reload() {
    this._plservice.findPlaylistById(this.plid).subscribe(
        (lst) => { this.playlist = lst; }
    );

    this._plservice.findSongsForPlaylist(this.plid).subscribe(
        (songs) => { this.songs = songs; }
    );
  }

  return() {
    let url = ""
    if (this.uid) {
      if (this.puid) {
        url = "/project/(project:user/" + this.uid + "/profile/" + this.puid;
      } else {
        url = "/project/(project:user/" + this.uid + "/list/search";
      }
    } else {
      if (this.puid) {
        url = "/project/search/user/" + this.puid
      } else {
        url = "/project/search/pl"
      }
    }
    this.router.navigateByUrl(url);
  }

  queuePlaylist() {

    this._qservice.setQueue(this.uid, this.playlist).subscribe(
      (res) => {
        this.queue_success = true
      },
      (err) => {
        this.queue_success = false
      }
    )

  }

  viewDetails(index) {
    let url = ""
    if (this.uid) {
      if (this.puid) {
        url = "/project/(project:user/" + this.uid +
              "/profile/" + this.puid + "/" + this.plid + "/" + index;
      } else {
        url = "/project/(project:user/" + this.uid +
              "/list/search/" + this.plid + "/" + index;
      }
    } else {
      if (this.puid) {
        url = "/project/search/user/"+ this.puid + "/" + this.plid + "/"+ index;
      } else {
        url = "/project/search/pl/"+ this.plid + "/" + index;
      }
    }
    this.router.navigateByUrl(url);
  }

}
