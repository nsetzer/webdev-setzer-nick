import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../services/user.service.client';
import { User } from '../../../../../objects/user.object';

@Component({
  selector: 'app-admin-user-new',
  templateUrl: './admin-user-new.component.html',
  styleUrls: ['./admin-user-new.component.css']
})
export class AdminUserNewComponent implements OnInit {

  uid : string  = ""
  user = new User("","","","","","")
  private sub: any;
  verify_password : string = ""
  changes_saved  = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.uid = params['uid'];
      this.reload();
    });
  }

  reload() {

  }

  createUser() {

  }

}
