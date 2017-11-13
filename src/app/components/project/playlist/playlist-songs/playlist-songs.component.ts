import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';
import { ProjectService } from '../../../../services/project.service.client';
import { Location } from '@angular/common';

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
  songs = []
  private sub: any;

  changed : Boolean = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private _service: UserService,
              private _plservice: PlaylistService,
              private _pservice: ProjectService) { }

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
      (err) => {
      }
    )

    this._plservice.findPlaylistById(this.plid).subscribe(
      (playlist) => {
        this.playlist = playlist;
      },
      (err) => {}
    );

    this._plservice.findSongsForPlaylist(this.plid).subscribe(
      (songs) => {
        this.songs = songs
        for (let i=0;i<this.songs.length;i++){this.songs[i].index=i+1}
      },
      (err) => {
      }
    );
  }

  back() {
    this.location.back();
  }

  isSuperUser() {
    return this._service.isSuperUser()
  }

  saveChanges() {

    this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(
      (res) => {
        let url = "/project/(project:user/" + this.uid + "/list)"
        this.router.navigateByUrl(url);
      }
    );

  }

  uploadSong() {
    if (this.changed) {
      this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(
        () => {
          let url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/upload)"
          this.router.navigateByUrl(url);
        },
        (err) => {}
      );

    } else {
      let url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/upload)"
      this.router.navigateByUrl(url);
    }
  }

  addSongs() {
    if (this.changed) {
      this._plservice.updatePlaylist(this.plid, this.playlist).subscribe(
        () => {
          this._pservice.clearPreviousKeywordSearch();
          let url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/add)"
          this.router.navigateByUrl(url);
        },
        (err) => {}
      );
    } else {
      this._pservice.clearPreviousKeywordSearch();
      let url = "/project/(project:user/" + this.uid + "/list/" + this.plid + "/add)"
      this.router.navigateByUrl(url);
    }
  }

  // TODO: other ways out of this page need to check if the list was changed

  // TODO: reordered elements need their indices updated

  reorderList(event) {
    // drag and drop does not upadte the internal list, only the view
    this.playlist.songs.splice(event.endIndex, 0,
      this.playlist.songs.splice(event.startIndex, 1)[0]);

    this.songs.splice(event.endIndex, 0,
      this.songs.splice(event.startIndex, 1)[0]);

    this.changed = true;
    for (let i=0;i<this.songs.length;i++){this.songs[i].index=i+1;}
  }

  delete(index) {
    // delete locally, require the user to save changes

    this.playlist.songs.splice(index, 1)
    this.songs.splice(index, 1)

  }

}
