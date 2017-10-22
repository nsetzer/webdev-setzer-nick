import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';
import { QueueService } from '../../../../services/queue.service.client';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})

export class PlaylistListComponent implements OnInit {

  uid : string;
  user : any;
  playlists : any = [];
  private sub: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _plservice: PlaylistService,
              private _qservice: QueueService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
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

    this._plservice.findPlaylistsByUser(this.uid).subscribe(
      (playlists) => {
        this.playlists = playlists;
      },
      (err) => {}
    )

  }

  queuePlaylist(lst) {
    console.log("eneueue playlist")

    // TODO this should be done on the server side
    this._plservice.findPlaylistById(lst._id).subscribe(
      (true_lst) => {
        this._qservice.setQueue(this.uid, true_lst).subscribe(
          (res) => {
            console.log("lst set")
          },
          (err) => {
            console.log("error setting lst")
          }
        )
      },
      (err) => {
        console.log("error retreiving lst")
      }
    );
  }

}
