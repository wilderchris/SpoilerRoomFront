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

import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewComponent } from './components/review/review.component';
import { MoviesliderComponent } from './components/movieslider/movieslider.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { HttpService } from './services/http.service';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    MoviesliderComponent,
    MoviePageComponent,
    HomeComponent,
    LoginComponent
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
    MatGridListModule,
    MatDialogModule
  ],
  providers: [
    HttpService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}} ],
  bootstrap: [AppComponent],
  entryComponents:[ReviewComponent]
})
export class AppModule { } 
