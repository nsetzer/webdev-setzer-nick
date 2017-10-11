
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

import { User } from '../objects/user.object';

@Injectable()

export class UserService {

  baseUrl = environment.baseUrl;

  nextId: number = 1000;

  users = User.getDefaultUsers();

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
    user._id = "" + this.nextId;
    this.nextId = this.nextId + 1;
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }

  findUserByUsername(username: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  updateUser(userId, user) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users[x] = user
      }
    }
  }

  deleteUser(userId) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1)
      }
    }
  }

  /**
   * fn : a function accepting the validated user object
   * returns: 0 on success
   *          1 for invalid username
   *          2 for invalid password
   */
  validateUser(username, password, fn) {

    var user = this.findUserByUsername(username)

    if (user) {
        if (user.password != password) {
            return 2;
        }
    } else {
        return 1;
    }

    fn(user);

    return 0;

  }

}



