import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Models/CartItem';
import { CartService } from "../Services/cart.service";
import { OrderLinesService } from '../Services/order-lines.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: CartItem[];


  constructor(
    private orderLinesService: OrderLinesService,
    private cartservice: CartService
  ) { }

  ngOnInit(): void {
    this.cart= this.cartservice.GetCart();

  }

  onClick()
  {
    this.orderLinesService.AddOrderLine(this.cart)
      .subscribe();
    window.localStorage.clear();
    this.ngOnInit();
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
