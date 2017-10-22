import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';

import { Playlist } from '../../../../objects/playlist.object';

@Component({
  selector: 'app-playlist-new',
  templateUrl: './playlist-new.component.html',
  styleUrls: ['./playlist-new.component.css']
})

export class PlaylistNewComponent implements OnInit {

  uid : string = "";
  plid : string = "";
  pid : string = "";
  playlist : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _plservice: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.reload();
    });
  }

  reload() {

    this.playlist = new Playlist("", "New Playlist", this.uid);

  }

  saveChanges() {
    this._plservice.createPlaylist(this.uid, this.playlist).subscribe(
      (res) => {
        let url = "/project/(project:user/" + this.uid + "/list)"
        this.router.navigateByUrl(url);
      }
    );
  }



}
