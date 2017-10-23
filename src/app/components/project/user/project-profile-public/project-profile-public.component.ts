import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';
import { User } from '../../../../objects/user.object';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-profile-public',
  templateUrl: './project-profile-public.component.html',
  styleUrls: ['./project-profile-public.component.css']
})
export class ProjectProfilePublicComponent implements OnInit {


  uid : string;
  puid : string;
  user_public = { username: ""};
  playlists = [];
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _plservice: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       if (params["uid"]) {
         this.uid = params['uid'];
       } else {
         this.uid = null;
       }
       this.puid = params['puid'];
       this.reload();
    });
  }

  reload() {
    this._service.findUserById(this.puid).subscribe(
      (user : User) => {this.user_public = user;},
      (err : any) => { }
      );
    /*
    this._service.findUserById(this.uid).subscribe(
      (user : User) => {this.user = user;},
      (err : any) => { }
      );
    */
    this._plservice.findPlaylistsByUser(this.puid).subscribe(
      (lsts) => {this.playlists = lsts;},
      (err : any) => { }
      );

  }

  copyPlaylist(lst) {
    if (this.uid) {
      lst.name = "Copy of " + lst.name
      this._plservice.createPlaylist(this.uid, lst)
      .subscribe(
          (new_lst) => {
              let url = "/project/(project:user/" + this.uid + "/list/"+new_lst._id+")"
              this.router.navigateByUrl(url);
          }
      );
    }
  }

  viewPlaylist(lst) {
    if (this.uid) {
      let url = "/project/(project:user/" + this.uid + "/profile/" +
                this.puid + "/" + lst._id+")"
      this.router.navigateByUrl(url);
    } else {
      let url = "/project/search/user/" + this.puid + "/" + lst._id;
      this.router.navigateByUrl(url);
    }
  }



}
