import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Models/Product';
import { CartItem } from "../Models/CartItem";
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
    let cartItem = new CartItem(product.id, product.name, product.price, 1);

    var existing = this.GetCart();

    existing.push(cartItem);

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
