import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { User } from '../../../../objects/user.object';
import { SharedService } from '../../../../services/shared.service.client';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-project-login',
  templateUrl: './project-login.component.html',
  styleUrls: ['./project-login.component.css']
})
export class ProjectLoginComponent implements OnInit {

  username: string
  password: string
  invalid_username: boolean
  invalid_password: boolean
  error_message: string = ""

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

    this._service.findUserByUsername(this.username)
      .subscribe(
        (user)=> {
          console.log("found user")
          this._service.login(this.username, this.password)
            .subscribe(
              (user) => {
                console.log("logged in")
                this._sharedService.current_user = user;
                this.router.navigateByUrl("/project/(project:user/" + user._id + ")")
              },
              (err) => {
                console.log("logged in error")
                this.invalid_password = true
                this.error_message = "Invalid username or password";
              }
            );
        },
        (err) => {
          this.invalid_username = true;
          this.error_message = "Invalid username";
        }
      )




  }

}
