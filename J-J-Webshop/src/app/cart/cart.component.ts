import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Models/CartItem';
import { CartService } from "../Services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartItem[];


  constructor(
    private cartservice: CartService
  ) { }

  ngOnInit(): void {
    this.cart= this.cartservice.GetCart();
  }

  onClick()
  {

  }

  Increase(item: CartItem)
  {
    item.amount ++;
    this.cartservice.SaveCart(this.cart);
  }

  Decrease(item: CartItem)
  {
    item.amount --;
    this.cartservice.SaveCart(this.cart);
  }

  OnChangeEvent(item: CartItem)
  {
    this.cartservice.SaveCart(this.cart);
  }
}
