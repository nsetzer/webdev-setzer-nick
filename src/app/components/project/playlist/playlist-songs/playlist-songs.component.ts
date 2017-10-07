import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';

@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.component.html',
  styleUrls: ['./playlist-songs.component.css']
})

export class PlaylistSongsComponent implements OnInit {

  uid : string;
  plid : string;
  user : any;
  playlist : any;
  private sub: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _plservice: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.plid = params['plid'];
       this.reload();
    });
  }

  reload() {
    this.user = this._service.findUserById(this.uid)

    this.playlist = this._plservice.findPlaylistById(this.plid);
  }

  saveChanges() {
    this._plservice.updatePlaylist(this.plid, this.playlist);
    let url = "/project/(project:user/" + this.uid + "/list)"
    this.router.navigateByUrl(url);
  }



}
