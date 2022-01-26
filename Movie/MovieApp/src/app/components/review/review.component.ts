import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { Review } from 'src/app/models/review';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movies!: Movie[];
  title = 'MovieApp';
  idInput:string = "";
  searchText:string = '';
  public form: FormGroup;


  review = {
    id:0,
    reviewTitle:"title for your review",
    reviewText:"tell us about the movie your reviewing",
    ratingReview:0,
    sentAt:"",
    user:2,
    movieid:1
}



  constructor(private httpServ: HttpService,private fb: FormBuilder){
  
    this.form = this.fb.group({
      ratingReview: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }



  async sendRev() {
   
    this.httpServ.sendReview(this.review).subscribe(
      ( resp: Review) => {
        this.review = resp;
        console.log(this.review);
    });
  }
}
