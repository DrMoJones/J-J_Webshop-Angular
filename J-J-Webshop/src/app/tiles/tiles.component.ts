import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Product } from "../Models/Product";

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit
{

  products: Product[];

  constructor(
    private productsService: ProductsService
    ) {}

  ngOnInit()
  {
    this.GetProducts();
  }

  GetProducts()
  {
    this.productsService.GetProducts()
    .subscribe(products => this.products = products)
  }
}
