import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
clicked = false;

 page = {
   name: 'Star',
   year: 1977,
   img: 'https://protwo.s3.us-east-2.amazonaws.com/assets/curtain-PROTOTYPE2.png'
 };
 
 handleClick() {
   this.clicked = true;
 }
}
