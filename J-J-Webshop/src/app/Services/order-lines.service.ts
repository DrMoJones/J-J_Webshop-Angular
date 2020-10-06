import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Models/Product'


@Injectable({
  providedIn: 'root'
})
export class OrderLinesService {

  constructor() { }
}
