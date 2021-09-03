import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/modele/film';
import { FilmService } from '../shared/service/film-service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films : Film[] = [];

  constructor( private filmservice: FilmService) { }

  ngOnInit(): void {
    this.filmservice.getFilms().subscribe((films: any) => {
      this.films =films.items;
      console.log(this.films);
  })
  }
}
