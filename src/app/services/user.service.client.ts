
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class UserService {


  baseUrl = environment.baseUrl;

  nextId: number = 1000;

  users = [
        {_id:      "123",
         username: "alice",
         password: "alice",
         firstName:"Alice",
         lastName: "Wonder",
         email:    "alice@example.com" },
        {_id:       "234",
         username:  "bob",
         password:  "bob",
         firstName: "Bob",
         lastName:  "Marley",
         email:     "bob@example.com" },
        {_id:      "345",
         username: "charly",
         password: "charly",
         firstName: "Charly",
         lastName: "Garcia",
         email:    "charly@example.com"  },
        {_id:       "456",
         username:  "jannunzi",
         password:  "jannunzi",
         firstName: "Jose",
         lastName:  "Annunzi",
         email:     "jannunzi@example.com"}
    ]

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

}



