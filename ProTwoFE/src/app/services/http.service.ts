import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {  Movie } from '../models/movie';
import { map } from 'rxjs';
import { Review } from '../models/review';
import { Like } from '../models/like';
import { Comments } from '../models/comments';
import { User } from '../models/user';
import { apiMovie } from '../models/apimovie';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  [x: string]: any;
url:string="http://localhost:8080/review";


  constructor(private http: HttpClient) { }

//************************** API method with my key, but it isnt much info  */
  getAPIMovie(idInput:string): Observable<apiMovie> {
    return this.http.get('https://imdb-api.com/en/API/SearchMovie/k_q525tskh/' + idInput).pipe(map(resp => resp as apiMovie));
  }


  //********* Movie Controller    the query params may be an issue still looking at them */
  sendMovie(movie:Movie):Observable<Movie> {
    return this.http.post<Movie>(this.url, movie);
    }
  getMovieById(movieId:number): Observable<Movie> {
    return this.http.get(this.url + '/movie/' + movieId).pipe(map(resp => resp as Movie));
  }
  getMovieByName(movieName:string): Observable<Movie> {// queery params may need more
    return this.http.get(this.url + '/movie/name_search?' + movieName).pipe(map(resp => resp as Movie));
  }

  getMovieByGenre(movieGenre:string): Observable<Movie> {// queery params may need more
    return this.http.get(this.url + '/movie/genre_search?' + movieGenre).pipe(map(resp => resp as Movie));
  }

  getMovieByYear(movieYear:string): Observable<Movie> {// queery params may need more
    return this.http.get(this.url + '/movie/year_search?' + movieYear).pipe(map(resp => resp as Movie));
  }
getReviewsByMovie(movieId:number): Observable<Review>{
  return this.http.get<Review>(this.url + '/' + movieId + 'get_reviews').pipe(map(resp => resp as Review));
}
//******* */


//************* Reviews Controller */
  sendReview(review:Review): Observable<Review> {
    return this.http.post<Review>(this.url, review);
  }

  likeReview(like:Like): void{
//no return or exception catchs
    this.http.post<Like>(this.url + '/like', like);
  }

//**********  */


//********** Comments controller  testing still needed */
getCommentByRevId(reviewId:number): Observable<Comments>{
  return this.http.get<Comments>(this.url + '/comment/' + reviewId).pipe(map(resp => resp as Comments));
}

sendComment(comment:Comments): Observable<Comments> {
  return this.http.post<Comments>(this.url, comment);
}

getAllCommentsByUser(user:User): Observable<Comments> {// wont take a body param and id
  return this.http.get<Comments>(this.url + '/user/' + user.id ).pipe(map(resp => resp as Comments));
}
deleteComment(comment:Comments){
  this.http.post<Comments>(this.url + comment.id+'/delete', comment);
}
///************ */
}
