import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../services/user.service.client';
import { User } from '../../../../../objects/user.object';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {

  uid : string  = ""
  puid : string = ""
  user = new User("","","","","","")
  private sub: any;
  changes_saved = false
  role_data = { "user": "User", "superuser":"Super User", "admin":"Admin"}

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
      (user) => {
        this.user = user;
      },
      (err) => {}
    )
  }

  deleteUser() {

  }

  changeRole(role) {
    this.user.role = role
  }

  saveChanges() {

  }

}
