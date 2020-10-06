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
import { OrderLine } from '../Models/OrderLines';


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

  orderline: OrderLine;
  orderLines: OrderLine[];

  constructor(    
    private CustomersService: CustomersService,
    private LoginService: LoginService,
    private OrderService: OrdersService
    ) { }

  ngOnInit(): void {
    this.GetCustomer(49);

    this.GetOrders(49)
  }

  GetCustomer(id: number){
    this.CustomersService.GetCustomer(id)
      .subscribe(customer => this.customer = customer)
  }

  GetOrders(id: number): void{
    this.OrderService.GetOrders(id)
      .subscribe(orders => this.orders = orders)
  }

}
