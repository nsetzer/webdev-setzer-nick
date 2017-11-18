import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { SharedService } from '../../../../services/shared.service.client';
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
              private _service: UserService,
              private _sharedService: SharedService) { }

  ngOnInit() {
  }

  register() {

    this.invalid_username = false
    this.invalid_password = false

    if (this.password != this.password_check) {
        this.invalid_password = true
        return
    }

    if (this.username==="") {
      this.invalid_username = true
      return
    }

    this._service.findUserByUsername(this.username)
      .subscribe(
        (user)=> {

          this.invalid_username = true;
          this.error_message = "Invalid username";

        },
        (err) => {

          let body = {
               username:  this.username,
               password:  this.password,
               firstName: this.firstName,
               lastName:  this.lastName,
               email:     this.email
          }

          this._service.register(body)
            .subscribe(
              (user) => {
                this._sharedService.current_user = user;
                this.router.navigateByUrl("/project/(project:user/" + user._id + ")");
              },
              (err) => {
                this.error_message = err;
              }
            );
        }
      )
  }

}
