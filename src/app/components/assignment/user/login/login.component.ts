import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              '../../../../../assets/css/style.css' ]
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

    var user = this._service.findUserByUsername(this.username)

    if (user) {
        this.invalid_username = false
        if (user.password == this.password) {
            this.router.navigate(["/user/" + user._id]);
        } else {
            this.invalid_password = true
        }
    } else {
        this.invalid_username = true
    }

  }
}
