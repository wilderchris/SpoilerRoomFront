import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() login: EventEmitter<any> = new EventEmitter();
  usernameInput!:string;
  passwordInput!:string;
  register!: RegisterComponent;
  constructor(private userServ:UserService) { }


  ngOnInit(): void {
  }

  logIn() {
    this.userServ.logIn(this.usernameInput,this.passwordInput).then(resp => {
      this.login.emit();
    });

  }

  onSubmit(): void{
    
  }
  
}
