import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-profile-public',
  templateUrl: './project-profile-public.component.html',
  styleUrls: ['./project-profile-public.component.css']
})
export class ProjectProfilePublicComponent implements OnInit {


  uid : string;
  user : any;
  private sub: any;
  changes_saved : boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       //this.uid = params['puid']; // (+) converts string 'id' to a number
       this.uid = "123"
       console.log(params);
       console.log(this.route);


       this.reload();
    });
  }

  reload() {
    this.user = this._service.findUserById(this.uid)
  }

  logout() {
    // this.router.navigate(['/speakers', {outlets: {'bio': [id]}}]);
    this.router.navigate(["/login"]);
  }

  saveChanges() {
    this._service.updateUser(this.uid, this.user);
    this.changes_saved = true;
  }
}
