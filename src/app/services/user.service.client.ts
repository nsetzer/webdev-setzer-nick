
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { User } from '../objects/user.object';

@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;

  state = {searchTerm:"", results:[]}

  options = new RequestOptions();

  api = {
    'login'    : this.login,
    'logout'   : this.logout,
    'register' : this.register,
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  constructor(private _http: Http) {
  }

  login(username,password) {

    const body = {
     username : username,
     password : password
    };
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/login', body, this.options)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', null, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  register(user) {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
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

  findUsersByName(username : string) {
    return this._http.get(this.baseUrl + `/api/user/find?username=${username}` )
     .map(
       (res: Response) => {
          const data = res.json();
          this.state.searchTerm = username;
          this.state.results = data
          return data;
       }
     );
  }

  getPreviousUserSearch() {
    return this.state;
  }

  clearPreviousUserSearch() {
    this.state = {results:[],searchTerm:""};
  }



}



