import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable, of } from "rxjs";
import { Order } from '../Models/Orders';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  private OrderUrl = 'api/orders';
  order: Order;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  GetOrder(id: number): Observable<Order>{
    const url = `${this.OrderUrl}/${id}`
    return this.http.get<Order>(url)
    .pipe(tap(_=> console.log(`fetched orders id = ${id}`)))
  }

  GetOrders(id: number): Observable<Order[]>{
    const url = `${this.OrderUrl}/GetAllOrders/${id}`
    return this.http.get<Order[]>(url)
    .pipe(tap(_=> console.log(`fetched orders`)))
  }

  AddOrders(order: Order): Observable<Order>{
    return this.http.post<Order>(this.OrderUrl, order, this.httpOptions)
    .pipe(tap(_=> console.log(`posted orders with id ${order}`)))
  }

  UpdateOrders(id:number, order: Order){
    const url = `${this.OrderUrl}/${id}`
    return this.http.put(url, order, this.httpOptions)
    .pipe(tap(_=> console.log(`updated orders with id ${id}`)))
  }

  DeleteOrders(order: Order | number): Observable<Order>{
    const id = typeof order === 'number' ? order : order.id
    const url = `${this.OrderUrl}/${id}`

    return this.http.delete<Order>(url, this.httpOptions)
    .pipe(tap(_=> console.log(`deleted orders with id = ${id}`)))
  }
}
