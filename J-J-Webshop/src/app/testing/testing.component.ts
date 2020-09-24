import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../Services/genre.service'
import { Genre } from '../Models/Genre'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  genres: Genre[];
  genre: Genre;

  constructor(
    private GenreService: GenreService,
    private route: ActivatedRoute, 
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.GenreService.getGenres()
      .subscribe(genres => this.genres = genres)
  }

  GetGenre(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id')

    this.GenreService.getGenre(id)
      .subscribe(genre => this.genre = genre)
  }

}
