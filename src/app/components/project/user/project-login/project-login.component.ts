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

    this._service.login(this.username, this.password)
     .subscribe(
       (user) => {
           this._sharedService.current_user = user;
           this.router.navigateByUrl("/project/(project:user/" + user._id + ")")
       },
       (err) => {
           this.error_message = "Invalid username or password";
       }
     );


  }

}
