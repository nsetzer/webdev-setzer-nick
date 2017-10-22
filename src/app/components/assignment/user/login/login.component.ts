import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
    this.username = ""
    this.password = ""
    this.invalid_username = false
    this.invalid_password = false

  }

  login() {

    this.invalid_password = false;
    this.invalid_username = false;

    this._service.validateUser(this.username, this.password,
      (user) => this.router.navigate(["/user/" + user._id]))
      .subscribe(
        (code : number) => {
          if (code==2) {
            this.invalid_password = true;
          } else if (code==1) {
            this.invalid_username = true;
          }
        },
        (err: any) => {}
        );

  }

}
