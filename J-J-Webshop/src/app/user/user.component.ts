import { Component, OnInit } from '@angular/core';
import { Customer } from '../Models/Customers';
import { CustomersService } from '../Services/customers.service';
import { LoginService } from '../Services/login.service';
import { OrdersService } from '../Services/orders.service';
import { ModelOrder, Order } from '../Models/Orders';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { ClassLogin, Login } from '../Models/Login';
import { ModelOrderLine, OrderLine } from '../Models/OrderLines';
import { Product } from '../Models/Product';
import { OrderLinesService } from '../Services/order-lines.service';
import { ProductsService } from '../Services/products.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  order: Order;
  orders: Order[];
  modelOrder: ModelOrder;

  customer: Customer;

  orderLine: OrderLine;
  orderLines: OrderLine[];
  modelOrderLine = new ModelOrderLine();

  products: Product[];

  constructor(
    private CustomersService: CustomersService,
    private LoginService: LoginService,
    private OrderService: OrdersService,
    private OrderlineService: OrderLinesService,
    private ProductService: ProductsService
  ) { }

  //vores dummy kunde er 49
  ngOnInit(): void {
    this.GetCustomer(9);
    this.GetOrders(9);
    this.GetProducts();
  }

  AddOrder(id: number): void {
    var statusId = 1;
    var customerId = id;
    this.OrderService.AddOrders({ customerId, statusId } as Order)
      .subscribe(order => {
        this.orders.push(order)
      });
  }

  GetCustomer(id: number) {
    this.CustomersService.GetCustomer(id)
      .subscribe(customer => this.customer = customer)
  }

  GetOrders(id: number) {
    this.OrderService.GetOrders(id)
      .subscribe(orders => this.orders = orders)
  }

  GetOrderLines(id: number) {
    this.OrderlineService.GetOrderLineByOrderId(id)
      .subscribe(orderlines => this.orderLines = orderlines)
  }


  GetProducts() {
    this.ProductService.GetProducts()
      .subscribe(products => this.products = products)
  }

  // Skal tage imod 4 værdier
  AddOrderLines(product: Product) {
    var productId = product.id;
    var orderId = 13;
    var amount = 2;
    var price = product.price;
    this.OrderlineService.AddOrderLine({ orderId, amount, price, productId }  as OrderLine)
      .subscribe(orderline => {
        this.orderLines.push(orderline)
      })
  }

  // Skal tage imod 4 værdier
  AddOrderLinesTest(productId: number, orderId: number, amount: number, price) {
    var productId = productId;
    var orderId = orderId;
    var amount = amount;
    var price = price;
    this.OrderlineService.AddOrderLine({ orderId, amount, price, productId }  as OrderLine)
      .subscribe(orderline => {
        this.orderLines.push(orderline)
      })
  }

  //TODO skulle nok et snapshot til at få Id'en til at vide hvilken kunde det er.
}
