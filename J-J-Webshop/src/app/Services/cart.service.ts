import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Models/Product'


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productUrl = 'api/Products';
  product: Product;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  AddToCart(){
    window.localStorage.setItem("cart", value);
    localStorage["cart"];
  }

  GetProduct(id: number): Observable<Product>{
    const url = `${this.productUrl}/${id}`
    return this.http.get<Product>(url)
  }
}
