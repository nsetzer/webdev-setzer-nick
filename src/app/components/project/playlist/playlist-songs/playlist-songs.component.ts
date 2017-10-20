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
  playlist : any = {songs:[]};
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
    this.user = this._service.findUserById(this.uid).subscribe(
      (user) => {
        this.user = user;
      },
      (err) => {}
    )

    this._plservice.findPlaylistById(this.plid).subscribe(
      (playlist) => {
        this.playlist = playlist;
      },
      (err) => {}
    )
  }

  saveChanges() {
    this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(
      (res) => {
        let url = "/project/(project:user/" + this.uid + "/list)"
        this.router.navigateByUrl(url);
      }
    );

  }

  reorderList(event) {

    // drag and drop does not upadte the internal list, only the view
    var song = this.playlist.songs.splice(event.startIndex, 1)[0]
    this.playlist.songs.splice(event.endIndex, 0, song);

    // this.playlist.songs.map( x => x._id )

  }

}
