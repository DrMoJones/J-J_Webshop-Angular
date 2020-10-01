import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


import { ProductsService } from '../Services/products.service';
import { Product } from "../Models/Product";

@Component({
  selector: 'app-productDescription',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.css'],
})
export class ProductDescriptionComponent implements OnInit {

  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit()
  {
    this.GetProduct();
    
  }

  GetProduct()
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.GetProduct(id)
    .subscribe(product => this.product = product)

  }
}
