import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { SocialService } from '../../../../services/social.service.client';
import { User } from '../../../../objects/user.object';
import { SharedService } from '../../../../services/shared.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.css']
})
export class ProjectProfileComponent implements OnInit {


  error_message : string = ""
  uid : string;
  user : any = new User("","","","","","")
  private sub: any;
  changes_saved : boolean = false;
  invalid_name = false

  playlists : any = [];
  following : any = [];
  followers : any = [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _socialService: SocialService,
              private _plservice: PlaylistService,
              private _sharedService: SharedService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.reload();
    });
  }

  reload() {
    this._service.findUserById(this.uid).subscribe(
      (user) => {
        this.user = user;
      },
      (err) => {}
    )

    this._socialService.getFollowing(this.uid).subscribe(
      (users) => { this.following = users;},
      (err) => {}
    );

    this._socialService.getFollowers(this.uid).subscribe(
      (users) => { this.followers = users;},
      (err) => {}
    );
  }

  logout() {
    this._service.logout()
     .subscribe(
       (data: any) => {
         this._sharedService.current_user = null;
         this.router.navigateByUrl('/');
       });
  }

  isAdmin() {
    return this._service.isAdmin()
  }

  saveChanges() {

    this.error_message = ""
    this.invalid_name = false

    if (this.user.username === "") {
      this.invalid_name = true
    }

    this._service.updateUser(this.uid, this.user).subscribe(
      () => {
        this.changes_saved = true;
      },
      (err) => {
        this.error_message = "Unable to update user"
      }
    );

  }
}
