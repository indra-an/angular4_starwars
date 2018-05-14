import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  films : any[];

  constructor(
     private filmService: FilmService,
   ) {
    this.films = [];
    this.populateFilmData();
  }

  ngOnInit() {
  }

  populateFilmData() {
    this.filmService.getList()
    .subscribe(
      data => {
        this.films = data;
      },
      error => {
        console.error(error);
      }
    );
  }

}
