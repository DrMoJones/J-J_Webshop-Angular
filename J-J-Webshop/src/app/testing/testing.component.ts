import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../Services/genre.service'
import { Genre } from '../Models/Genre'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  //genres$: Observable<Genre>;
  genres: Genre[];
  genre: Genre;

  constructor(
    private GenreService: GenreService,
    private route: ActivatedRoute, 
    private location: Location
    ) { }

  ngOnInit(): void {
    this.GetGenres();
  }

  GetGenres(): void {
    this.GenreService.GetGenres()
      .subscribe(genres => this.genres = genres)
  }

  GetGenre(id: number): void {
    //const id = +this.route.snapshot.paramMap.get('id')

    this.GenreService.GetGenre(id)
      .subscribe(genre => this.genre = genre)
  }

  Add(genreName: string): void{
    genreName = genreName.trim();
    if (!genreName) { return; }
    this.GenreService.AddGenre({ genreName } as Genre)
      .subscribe(genre => {
        this.genres.push(genre)
      })
  }

  Update(id: number, genreName: string): void {
    genreName = genreName.trim();
    if (!genreName) { return; }
    this.GenreService.UpdateGenre(id, {id, genreName} as Genre)
      .subscribe()
        //genre => {this.genres.push(genre)})   
  }


  Delete(genre: Genre): void{
    this.genres = this.genres.filter(h => h !== genre);
    this.GenreService.DeleteGenre(genre).subscribe();
    
    //this.GetGenres();
  }

}
