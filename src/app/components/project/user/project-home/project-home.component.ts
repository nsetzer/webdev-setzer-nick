import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  /*

  inject/call parent component methods
  https://stackoverflow.com/questions/35940984/angular2-call-function-of-parent-component

  */
  //uid : string;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
  }

  reload() {
  }

  openProfileHome() {
    let uid = this.route.snapshot.firstChild.url[1].path;

    if (uid) {
        let url = "/project/(project:user/" + uid + ")"
        this.router.navigateByUrl(url);
    }
  }

}
