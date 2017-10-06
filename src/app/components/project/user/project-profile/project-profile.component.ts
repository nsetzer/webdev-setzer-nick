import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent implements OnInit {


  uid : string;
  user : any;
  private sub: any;
  changes_saved : boolean = false;

  playlists : any = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _plservice: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid']; // (+) converts string 'id' to a number
       console.log(params);
       this.reload();
    });
  }

  reload() {
    this.user = this._service.findUserById(this.uid)

    this.playlists = this._plservice.findPlaylistsByUser(this.uid);

    console.log(this.playlists)
  }

  logout() {
    this.router.navigateByUrl("/project/login");
  }

  saveChanges() {
    this._service.updateUser(this.uid, this.user);
    this.changes_saved = true;
  }
}
