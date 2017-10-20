import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
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
  user : any;
  user_public : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.puid = params['puid'];
       this.reload();
    });
  }

  reload() {
    this._service.findUserById(this.puid).subscribe(
      (user : User) => {this.user_public = user;},
      (err : any) => { }
      );
    this._service.findUserById(this.uid).subscribe(
      (user : User) => {this.user = user;},
      (err : any) => { }
      );
  }

}
