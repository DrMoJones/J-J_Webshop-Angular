import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { OrderLine } from '../Models/OrderLines';
import { Product } from '../Models/Product';
import { CartItem } from '../Models/CartItem';



@Injectable({
  providedIn: 'root'
})
export class OrderLinesService {
  private orderLinesUrl = 'api/OrderLines';
  orderLine: OrderLine;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  GetOrderLineByOrderId(id: number){
    const url = `${this.orderLinesUrl}/${id}`
    return this.http.get<OrderLine[]>(url)
    .pipe(tap(_=> console.log(`fetched orderlines`)))
  }

  AddOrderLine(cart: CartItem[]){
    return this.http.post<OrderLine>(this.orderLinesUrl, cart, this.httpOptions)
    .pipe(tap(_=> console.log(`posted orders with id ${cart}`)))
  }
}
