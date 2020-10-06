import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../Services/products.service';
import { Product } from "../Models/Product";
import { CartService } from "../Services/cart.service";

@Component({
  selector: 'app-productDescription',
  templateUrl: './productDescription.component.html',
  styleUrls: ['./productDescription.component.css'],
})
export class ProductDescriptionComponent implements OnInit {

  product: Product;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,

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

  onClick()
  {
    this.cartService.AddToCart(this.product)
  }
}
