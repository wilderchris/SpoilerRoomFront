import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
 { path: 'review', component: ReviewComponent},
 { path: 'movie-page', component: MoviePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
