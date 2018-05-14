import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmService } from '../../services/film.service';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  film: any;
  movie_id: string = null;
  char_response:any;
  char_names: any = [];
  constructor(
     private filmService: FilmService,
     private peopleService: PeopleService,
     private activatedRoute: ActivatedRoute,
   ) {
    this.film = {};
    this.activatedRoute.params.forEach(params => {
      this.movie_id = params['id'];
      this.populateFilmData();
    })
  }

  ngOnInit() {
  }

  populateFilmData() {
    this.filmService.getDetail(this.movie_id)
    .subscribe(
      data => {
        this.film = data;
        this.populateCharacterData();
      },
      error => {
        console.error(error);
      }
    );
  }

  populateCharacterData() {
    for ( let char of this.film.characters){
      this.peopleService.getDetailFromUrl(char)
      .subscribe(
        data => {
          this.char_response = data;
          this.char_names.push(this.char_response.name);
          console.log(this.char_names)
        },
        error => {
          console.error(error);
        }
      );
    }
  }

}
