import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedInUser!:User;
  showLogin!:false;



  constructor(private userServ:UserService) { }

  ngOnInit(): void {
this. setup();

  }

setup(){
  this.userServ.checkLogin().then(resp => {
    this.loggedInUser = this.userServ.loggedInUser;
    this.showLogin=false;
  });

}
logOut() {
  this.userServ.logOut();
  this.loggedInUser;
}

}
