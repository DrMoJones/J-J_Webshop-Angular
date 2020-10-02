import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable, of } from "rxjs";
import { Login } from "../Models/Login";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginUrl = 'api/logins';
  login: Login;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  GetLogin(id: number): Observable<Login>{
    const url = `${this.loginUrl}/${id}`
    return this.http.get<Login>(url)
    .pipe(tap(_=> console.log(`fetched login id = ${id}`)))
  }

  AddLogin(login: Login): Observable<Login>{
    return this.http.post<Login>(this.loginUrl, login, this.httpOptions)
    .pipe(tap(_=> console.log(`posted login with id ${login.email}`)))
  }

  UpdateProduct(id:number, login: Login){
    const url = `${this.loginUrl}/${id}`
    return this.http.put(url, login, this.httpOptions)
    .pipe(tap(_=> console.log(`updated login with id ${id}`)))
  }

  DeleteLogin(login: Login | number): Observable<Login>{
    const id = typeof login === 'number' ? login : login.id
    const url = `${this.loginUrl}/${id}`

    return this.http.delete<Login>(url, this.httpOptions)
    .pipe(tap(_=> console.log(`deleted login with id = ${id}`)))
  }

}
