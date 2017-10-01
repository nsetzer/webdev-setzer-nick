import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
              '../../../../../assets/css/style.css' ]
})
export class ProfileComponent implements OnInit {

  uid : string;
  user : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid']; // (+) converts string 'id' to a number

       this.reload();
    });
  }

  reload() {
    this.user = this._service.findUserById(this.uid)
  }


  openWebsiteList() {

    var url = "/user/" + this.uid + "/website";
    this.router.navigate([url]);
  }

  logout() {
    this.router.navigate(["/login"]);
  }

}
