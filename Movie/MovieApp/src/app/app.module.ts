import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './components/review/review.component';
import { MoviesliderComponent } from './components/movieslider/movieslider.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    MoviesliderComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
