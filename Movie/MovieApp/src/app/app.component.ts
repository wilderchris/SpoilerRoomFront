import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Review } from './models/review';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpoilerScreen';
  //movies: Movie[] = [];
  // movie: Movie = new Movie;
  //idInput:string = "";
 // searchText:string = '';
  public form: FormGroup | undefined;
  private movieName: string="";

  review:Review = {
    id:0,
    reviewTitle:"title for your review",
    reviewText:"tell us about the reason for your review",
    ratingReview:0,
    sentAt:"",
    user:2,
    movieid:1
}

constructor(private http: HttpService,private fb: FormBuilder){
  
}
  ngOnInit(): void {

  }

  async getMovie() {
   
  //  this.http.getMovieByName(this.movieName).subscribe(
     // (      resp: Movie) => {
        //this.movie = resp;
      //  console.log(this.movies);
  //  });
  }
  


 
}
