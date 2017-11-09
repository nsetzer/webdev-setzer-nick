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
  return this._userService.loggedIn()
 }
}
