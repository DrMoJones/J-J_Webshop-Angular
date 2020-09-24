import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Genre } from '../Models/Genre';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private GenreUrl = 'api/Genres';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.GenreUrl)
      .pipe(tap(_ => console.log('fetched heroes')))
  }

  getGenre(id: number): Observable<Genre>{
    const url = `${this.GenreUrl}/${id}`;
    return this.http.get<Genre>(url)
      .pipe(tap(_ => console.log(`fetched genre id = ${id}`)))
  } 
}
