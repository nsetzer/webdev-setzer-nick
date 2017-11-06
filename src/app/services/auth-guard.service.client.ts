import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

 constructor(private userService: UserService, private router: Router) {}

 async canActivate() {
   let user = this.userService.loggedIn();
   if (user) {
     console.log("user is logged in")
     return true;
   }
   return false;
 }
}
