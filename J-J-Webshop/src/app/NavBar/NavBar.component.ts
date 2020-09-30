import { Component, OnInit } from '@angular/core';
import { GenreService } from '../Services/genre.service';
import { Genre } from '../Models/Genre';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit {

  genres: Genre[];

  constructor(
    private genresService: GenreService
  ) { }

  ngOnInit() {
    this.GetGenres();
  }

  GetGenres()
  {
    this.genresService.GetGenres()
    .subscribe(genres => this.genres = genres)
  }

}
