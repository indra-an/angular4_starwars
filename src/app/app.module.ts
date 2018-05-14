import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { ApiService } from './services/api.service';
import { FilmService } from './services/film.service';
import { PeopleService } from './services/people.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { MovieDetailComponent } from './view/movie-detail/movie-detail.component';
import { SortPipe } from './pipes/sort.pipe';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieDetailComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,

    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [
    ApiService,
    FilmService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
