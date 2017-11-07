import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';
import {SharedService} from './shared.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

 constructor(private _userService: UserService,
             private _sharedService: SharedService,
             private router: Router) {}

 canActivate() {
  /*
  let user = await this._userService.loggedIn();
  let user = this._sharedService.current_user;
  if (user) {
    return true;
  }
  return false;
  */
  return this._userService.loggedIn()
 }
}
