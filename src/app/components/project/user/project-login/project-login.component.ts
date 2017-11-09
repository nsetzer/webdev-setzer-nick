import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { User } from '../../../../objects/user.object';
import { SharedService } from '../../../../services/shared.service.client';
import { Router, ActivatedRoute } from '@angular/router';

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

    /*
    this.invalid_password = false;
    this.invalid_username = false;

    this._service.validateUser(this.username, this.password,
      (user) => this.router.navigateByUrl("/project/(project:user/" + user._id + ")"))
      .subscribe(
        (code : number) => {
          if (code==2) {
            this.invalid_password = true;
          } else if (code==1) {
            this.invalid_username = true;
          }
        },
        (err : any) => {
          let msg = JSON.parse(err._body)
          this.error_message = msg.message;
        }
        );
    */
    console.log(this.username)
    this._service.login(this.username, this.password)
     .subscribe(
       (user) => {
          console.log("success " + this.username)
           this._sharedService.current_user = user;
           this.router.navigate(["/user/" + user._id])
       },
       (err) => {
           console.log("failed to log in user")
           console.log(err)
           this.error_message = err;
       }
     );


  }

}
