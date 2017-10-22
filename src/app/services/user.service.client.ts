
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { User } from '../objects/user.object';

@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  constructor(private _http: Http) {
  }

  createUser(user: any) {
    return this._http.post(this.baseUrl + '/api/user/', user)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  findUserById(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
     .map(
       (res: Response) => {
         const data : User = res.json();
         return data;
       }
     );
  }

  findUserByUsername(username: string) {
    return this._http.get(this.baseUrl + `/api/user?username=${username}` )
     .map(
       (res: Response) => {
        if (res.ok) {
          const data : User = res.json();
          return data;
        } else {
          return;
        }
       }
     );
  }

  updateUser(userId, user) {
    return this._http.put(this.baseUrl + "/api/user/" + userId, user)
     .map(
       (res: Response) => {
         return;
       }
     );
  }

  deleteUser(userId) {
    return this._http.delete(this.baseUrl + "/api/user/" + userId)
     .map(
       (res: Response) => {
         return;
       }
     );
  }

  /**
   * fn : a function accepting the validated user object
   * returns: 0 on success
   *          1 for invalid username
   *          2 for invalid password
   */
  validateUser(username, password, fn) {

    return this._http.get(
      this.baseUrl + `/api/user?username=${username}&password=${password}` )
     .map(
       (res: Response) => {
         const user = res.json();
         if (!user) {
            return 1;
         } else {
            fn(user);
            return 0;
         }
       }
     );
  }

}



