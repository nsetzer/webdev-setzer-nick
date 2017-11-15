import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { SharedService } from '../../../../services/shared.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { environment } from '../../../../../environments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string
  password: string
  invalid_username: boolean
  invalid_password: boolean
  error_message: string = ""

  facebook_auth_url = environment.baseUrl + '/api/facebook'

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _sharedService: SharedService) { }

  ngOnInit() {
    this.username = ""
    this.password = ""
    this.invalid_username = false
    this.invalid_password = false

  }

  login() {

    this.invalid_password = false;
    this.invalid_username = false;

    this._service.login(this.username, this.password)
     .subscribe(
       (user) => {
           this._sharedService.current_user = user;
           this.router.navigate(["/user/" + user._id])
       },
       (err) => {
           this.error_message = "Invalid username or password";
       }
     );


  }

}
