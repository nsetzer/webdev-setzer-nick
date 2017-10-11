import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  username: string = ""
  email: string = ""
  firstName: string = ""
  lastName: string = ""
  password: string = ""
  password_check: string = ""
  invalid_username: boolean = false
  invalid_password: boolean = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
  }

  register() {

    this.invalid_username = false
    this.invalid_password = false

    if (this.password != this.password_check) {
        this.invalid_password = true
        return
    }

    if (this._service.findUserByUsername(this.username)) {
        this.invalid_username = true
        return
    }

    let user = this._service.createUser({
         username:  this.username,
         password:  this.password,
         firstName: this.firstName,
         lastName:  this.lastName,
         email:     this.email
    });

    this.router.navigate(["/login"]);
  }

}
