import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { User } from '../../../../objects/user.object';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  error_message : string = ""
  uid : string;
  user : User = new User("","","","","","");
  private sub: any;
  changes_saved : boolean = false;

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
    this._service.findUserById(this.uid).subscribe(
      (user : User) => {this.user = user;},
      (err : any) => { this.error_message = "unexpected api error" }
      );
  }

  logout() {
    this.router.navigate(["/login"]);
  }

  saveChanges() {
    this._service.updateUser(this.uid, this.user);
    this.changes_saved = true;
  }

}
