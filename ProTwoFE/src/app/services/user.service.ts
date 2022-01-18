import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser!:User;


  constructor(private url: UrlService) { }


  async checkLogin() {
    let token = localStorage.getItem('Token');
    if (token) {
      let resp = await fetch(this.url.url + 'user/' + token + '/auth');
      if (resp.status===200) {
        this.loggedInUser = await resp.json();
      }
    }
  }

  async logIn(username:string,password:string): Promise<void> {
    let credentials = {
      'username':username,
      'password':password
    };

    let resp = await fetch(this.url.url + 'user/auth', {method:'POST',body:JSON.stringify(credentials)});

    if (resp.status===200) {
      let token = await resp.json();
      localStorage.setItem('Token', token);
    }
  }

  logOut(): void {
    localStorage.clear();
    this.loggedInUser;
  }

  async register(person:User): Promise<void> {
    let resp = await fetch(this.url.url + 'user', {method:'POST',body:JSON.stringify(person)});
    if (resp.status===200 || resp.status===201) {
      // TODO
    }
  }

  async updateUser(person:User): Promise<void> {
    if (person.id===this.loggedInUser.id) {
      let resp = await fetch(this.url.url + 'user/' + person.id, {method:'PUT',body:JSON.stringify(person)});
      if (resp.status===200) {
        this.loggedInUser = await resp.json();
      }
    }
  }
}
