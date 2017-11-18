import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { SharedService } from '../../../../services/shared.service.client';
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
  invalid_name = true

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _sharedService: SharedService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid']; // (+) converts string 'id' to a number

       this.reload();
    });
  }

  reload() {
    this._service.findUserById(this.uid).subscribe(
      (user : User) => {
        this.user = user;
      },
      (err : any) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

  logout() {
    this._service.logout()
     .subscribe(
       (data: any) => {
         this._sharedService.current_user = null;
         this.router.navigate(['/']);
       });
  }

  saveChanges() {

    this.error_message = ""
    this.invalid_name = false

    if (this.user.username === "") {
      this.invalid_name = true
    }

    this._service.updateUser(this.uid, this.user).subscribe(
      () => {
        this.changes_saved = true;
      },
      (err) => {
        this.error_message = "Unable to update user"
      }
    );
  }

}
