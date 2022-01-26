import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';
import { ApiMovie } from 'src/app/models/apimovie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie2: Movie;
  //movie1: Movie[] =[];
  //apiMovie!:ApiMovie;
 // movies!: Movie[];
  movie: Movie = {
    id: 0,
    movieName: "Happy Gilmore",
    year:1995,
    description:"The greatest of all time, slice of Life about the end of the world.",
    movieRating:"R",
    genre:"Comedy",
    image:'https://protwo.s3.us-east-2.amazonaws.com/assets/happyGilmore.png',
    url:"https://www.youtube.com/watch?v=pTXhmv1pjcw"
  }
  //movName:string = "Jack+Reacher";



  constructor(private httpServ: HttpService) { }

  async ngOnInit() {
   this.movie2 = await this.httpServ.getMovieById(1);

    // this.httpServ.getMovieById(1).subscribe(resp => {this.movie2 , resp});
    console.log(this.movie2);
  }
onSearch(){
  // this.httpServ.getAPIMovie("Jack+Reacher").subscribe(resp => {this.apiMovie = resp});
  //   console.log(this.apiMovie);
// this.movie = this.httpServ.getAPIMovie(this.movie.movieName);
}
}
