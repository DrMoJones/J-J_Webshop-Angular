import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productUrl = 'api/Products';
  product: Product;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  GetProduct(id: number): Observable<Product>{
    const url = `${this.productUrl}/${id}`
    return this.http.get<Product>(url)
      .pipe(tap(_ => console.log(`fetched genre id = ${id}`)))
  }

  GetProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
      .pipe(tap(_ => console.log(`Fetched products`)))
  }

  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productUrl}/?name=${term}`);
  }

  AddProducts(product: Product): Observable<Product>{
    this.product.name = name;


    return this.http.post<Product>(this.productUrl, product, this.httpOptions)
      .pipe(tap(_ => console.log(`posted product with name = ${product.name}`)))
  }

  DeleteProduct(product: Product | number): Observable<Product>{
    const id = typeof product === 'number' ? product : product.id
    const url = `${this.productUrl}/${id}`

    return this.http.delete<Product>(url, this.httpOptions)
      .pipe(tap(_ => console.log(`deleted Genre with id = ${id}`)))
  }

}
