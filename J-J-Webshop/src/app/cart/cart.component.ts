import { Component, OnInit } from '@angular/core';
import { CartService } from "../Services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = JSON.parse(window.localStorage.getItem('cart'));


  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {

  }
}
