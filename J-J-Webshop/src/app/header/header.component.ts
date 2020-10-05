import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Product } from "../Models/Product";
import { ProductsService } from "../Services/products.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products$: Observable<Product[]>
  private searchTerms = new Subject<string>();

  Cart: Product[];

  constructor(
    private productsService: ProductsService
    ) { }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log(this.searchTerms)
  }

  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.productsService.searchProducts(term))
    );
  }
}
