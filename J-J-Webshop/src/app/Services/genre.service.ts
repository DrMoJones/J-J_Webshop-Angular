import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Genre } from '../Models/Genre';



@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private GenreUrl = 'api/Genres';
  private test: string;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  GetGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.GenreUrl)
      .pipe(tap(_ => console.log('fetched heroes')))
  }

  GetGenre(id: number): Observable<Genre>{
    const url = `${this.GenreUrl}/${id}`;
    return this.http.get<Genre>(url)
      .pipe(tap(_ => console.log(`fetched genre id = ${id}`)))
  } 

  AddGenre(genre: Genre): Observable<Genre>{
    return this.http.post<Genre>(this.GenreUrl, genre, this.httpOptions)
      .pipe(tap(_ => console.log(`posted genre with name = ${genre.genreName}`)))
  }

  UpdateGenre(id: number, genre: Genre){
    const url = `${this.GenreUrl}/${id}`
    /* var test: number = +id;
    this.test = JSON.stringify({
      "id": genre.id,
      "genreName": genre.genreName
    });
    //console.log(this.test);*/
    return this.http.put(url, genre, this.httpOptions)
      .pipe(tap(_ => console.log(`Updated Genre with id ${id}`)))
  }

  DeleteGenre(genre: Genre | number): Observable<Genre>{
    const id = typeof genre === 'number' ? genre : genre.id
    const url = `${this.GenreUrl}/${id}`

    return this.http.delete<Genre>(url, this.httpOptions)
      .pipe(tap(_ => console.log(`deleted Genre with id = ${id}`)))
  }

}
