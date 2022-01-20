import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {




  public regForm: FormGroup | undefined;
  newUser!: User;
  constructor(private fb: FormBuilder, private userServ:UserService) { }

  ngOnInit(): void {
    this.initRegForm();
    
    
  }
initRegForm(): void{
  this.regForm = this.fb.group({
    firstName: ['', [
      Validators.required
    ]],
    lastName: ['', [
      Validators.required
    ]],
    username: ['', [
      Validators.required
    ]],
    passwd: ['', [
      Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
    ]],// validator requires at least 1 letter and 1 number in the password string
    agree: [false, [
      Validators.requiredTrue
    ]]

  });
  this.regForm.valueChanges.subscribe(console.log);

}


get firstName() {
  return this.regForm?.get('firstName');
}
get lastName() {
  return this.regForm?.get('lasttName');
}
get username() {
  return this.regForm?.get('username');
}
get passwd() {
  return this.regForm?.get('passwrd');
}
get agree() {
  return this.regForm?.get('agree');
}


register() {
 
  //this.newUser = new User(0, this.firstName,this.lastName, this.username, this.passwd,3);
 
  this.userServ.register(this.newUser).then(resp => {
    this.register();
  });

  console.log(this.regForm);
}
}
