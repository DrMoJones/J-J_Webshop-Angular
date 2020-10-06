import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from '../Models/Customers'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customerUrl = 'api/Customers';
  customer: Customer;


  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  GetCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl)
      .pipe(tap(_ => console.log(`fetched customers`)))
  }

  GetCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`
    return this.http.get<Customer>(url)
      .pipe(tap(_ => console.log(`fetched customer with id ${id}`)))
  }

  AddCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions)
      .pipe(tap(_ => console.log(`Posted customer with id ${customer.name}`)))
  }

  UpdateCustomer(id: number, customer: Customer) {
    const url = `${this.customerUrl}/${id}`
    customer.loginId = 1;
    return this.http.put(url, customer, this.httpOptions)
      .pipe(tap(_ => console.log(`updated customer with name ${customer.name}`)))
  }

  DeleteCustomer(customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id
    const url = `${this.customerUrl}/${id}`

    return this.http.delete<Customer>(url, this.httpOptions)
      .pipe(tap(_ => console.log(`deleted customer with id = ${id}`)))
  }
}
