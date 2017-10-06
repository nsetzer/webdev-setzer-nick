import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  uid : string;
  user : any;
  private sub: any;
  changes_saved : boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid']; // (+) converts string 'id' to a number

       console.log("home:" + params)
       console.log(params)
       this.reload();
    });
  }

  reload() {
    this.user = this._service.findUserById(this.uid)
  }

  logout() {
    this.router.navigate(["/login"]);
  }

}
