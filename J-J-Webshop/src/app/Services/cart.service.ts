import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Models/Product'
import { stringify } from 'querystring';


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

  AddToCart(product: Product)
  {
    var existing = this.GetCart();

    existing.push(product);

    this.SaveCart(existing);

    console.log(window.localStorage)
  }

  GetCart(){
    var existing: any = window.localStorage.getItem('cart');

    if (existing == null)
    {
      existing = [];
    }

    else
    {
      existing = JSON.parse(existing)
    }

    return existing;
  }

  SaveCart( existing : any[] )
  {
    window.localStorage.setItem('cart', JSON.stringify(existing));
  }
}
