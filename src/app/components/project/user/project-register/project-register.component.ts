import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-register',
  templateUrl: './project-register.component.html',
  styleUrls: ['./project-register.component.css']
})
export class ProjectRegisterComponent implements OnInit {

  username: string = ""
  email: string = ""
  firstName: string = ""
  lastName: string = ""
  password: string = ""
  password_check: string = ""
  error_message: string = ""
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

    this._service.createUser({
         username:  this.username,
         password:  this.password,
         firstName: this.firstName,
         lastName:  this.lastName,
         email:     this.email
    }).subscribe(
     (user) => {
      this.router.navigate(["/project/login"]);
     },
     (err) => {
      let msg = JSON.parse(err._body)
      this.error_message = msg.message;
     }
    );
  }

}
