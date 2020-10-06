import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../Services/genre.service';
import { ClassGenre, Genre } from '../Models/Genre';
import { ClassProduct, Product } from '../Models/Product';
import { ProductsService } from '../Services/products.service';
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

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  genres: Genre[];
  genre: Genre;
  selectedGenre: Genre;
  genreEdit: boolean;
  genreModel = new ClassGenre();

  products: Product[];
  product: Product;
  productEdit: boolean;
  selectedProduct: Product;
  productModel = new ClassProduct();

  customers: Customer[];
  customer: Customer;
  customerEdit: boolean;
  selectedCustomer: Customer;
  customerModel = new Customer();
  
  login: Login;
  logins: Login[];
  selectedLogin: Login;
  loginEdit: boolean;
  loginModel= new ClassLogin();

  order: Order;
  orders: Order[];
  modelOrder: ModelOrder;

  constructor(
    private GenreService: GenreService,
    private ProductService: ProductsService,
    private CustomersService: CustomersService,
    private LoginService: LoginService,
    private OrderService: OrdersService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.genreEdit = false;
    this.GetGenres();
    this.GetProducts();
    this.GetCustomers();
  }

  private delay(ms: number)
  {
  return new Promise(resolve => setTimeout(resolve, ms));
  }

  //#region CRUD genres
  genreEditChangeTrue() {
    this.genreEdit = true
  }

  genreEditChangeFalse() {
    this.genreEdit = false;
    this.selectedGenre = null;
    this.GetGenres();
  }

  onSelectGenre(genre: Genre) {
    this.selectedGenre = genre;
    console.log(this.selectedGenre);
  }

  GetGenres(): void {
    this.GenreService.GetGenres()
      .subscribe(genres => this.genres = genres)
  }

  GetGenre(id: number): void {
    this.GenreService.GetGenre(id)
      .subscribe(genre => this.genre = genre)
  }

  async AddOrUpdateGenre(id: number, genreName: string) {
    if (this.genreEdit) {
      if (!genreName) { return; }
      genreName = genreName.trim();
      //var test: number = +id;
      this.GenreService.UpdateGenre(id, { id, genreName } as Genre)
        .subscribe()
    }
    else {
      id = null;
      if (!genreName) { return; }
      genreName = genreName.trim();
      this.GenreService.AddGenre({ genreName } as Genre)
        .subscribe(genre => {
          this.genres.push(genre)
        })
    }
    await this.delay(500);
    this.GetGenres();
  }

  Delete(genre: Genre): void {
    if(confirm("Er du sikker")){
    this.genres = this.genres.filter(h => h !== genre);
    this.GenreService.DeleteGenre(genre).subscribe();

    //this.GetGenres();
  }
  }
  //#endregion

  //#region CRUD Products
  ProductEditTrue() {
    this.productEdit = true;
  }

  ProductEditFalse() {
    this.productEdit = false;
    this.selectedProduct = null;
    this.GetProducts();
  }

  OnSelectProduct(product: Product) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }

  GetProducts() {
    this.ProductService.GetProducts()
      .subscribe(products => this.products = products)
  }

  GetProduct(id: number) {
    this.ProductService.GetProduct(id)
      .subscribe(product => this.product = product)
  }

  async AddOrUpdateProduct(product: Product) {
    if (this.productEdit) {
      if (!product.name) { return; }
      product.name = product.name.trim();
      product.description = product.description.trim();
      this.ProductService.UpdateProduct(product.id, product)
        .subscribe()
    }
    else {
      if (!product.name) { return; }
      product.name = product.name.trim();
      product.description = product.description.trim();

      this.ProductService.AddProducts(product)
        .subscribe(product => {
          this.products.push(product)
        })
    }
    await this.delay(500);
    this.GetProducts();
  }

  DeleteProduct(product: Product): void {
    if(confirm("Er du sikker")){
    this.products = this.products.filter(h => h !== product);
    this.ProductService.DeleteProduct(product).subscribe();
  } 
  }

  //#endregion

  //#region CRUD Login
  loginEditChangeTrue() {
    this.loginEdit = true
  }

  loginEditChangeFalse() {
    this.loginEdit = false;
    this.selectedLogin = null;
  }

  GetLogin(id: number) {
    this.LoginService.GetLogin(id)
      .subscribe(login => this.selectedLogin = login)
  }

  GetLoginByEmail(email: string) {
    this.LoginService.GetLoginByEmail(email)
      .subscribe(login => this.login = login)
  }

  DeleteLogin(login : Login): void {
    //this.login = this.login.filter(h => h !== login);
    this.LoginService.DeleteLogin(login).subscribe();
  }

  OnSelectLogin(login: Login) {
    this.selectedLogin = login;
    console.log(this.selectedLogin);
  }

  AddOrUpdateLogin(login: Login) {
    if (this.loginEdit) {
      if (!login.email) { return; }
      login.email = login.email.trim();
      login.password = login.password.trim();
      this.LoginService.UpdateLogin(login.id, login)
        .subscribe()
    }
    else {
      if (!login.email) { return }
      login.email = login.email.trim();
      login.password = login.password.trim();

      this.LoginService.AddLogin(login)
        .subscribe(login => {
          this.logins.push(login)
        })
    }
    this.GetLogin(login.id);
  }
  //#endregion

  //#region CRUD Customers
  customerEditChangeTrue(){
    this.customerEdit = true;
  }

  customerEditChangeFalse(){
    this.customerEdit = false;
    this.selectedCustomer = null;
    this.GetCustomers();
  }

  onSelectCustomer(customer: Customer, login: Login){
    this.selectedCustomer = customer;
    this.GetLogin(customer.loginId)
    console.log(this.selectedLogin)
    console.log(this.selectedCustomer);
  }

  GetCustomers() {
    this.CustomersService.GetCustomers()
    .subscribe(customers => this.customers = customers)
  }

  GetCustomer(id: number): void {
    this.CustomersService.GetCustomer(id)
      .subscribe(customer => this.customer = customer)
  }

  async AddOrUpdateCustomer(customer: Customer, login: Login){
    if (this.customerEdit) {
      if (!customer.name) { return; }
      customer.name = customer.name.trim();
      customer.address = customer.address.trim();
      this.LoginService.UpdateLogin(login.id, login)
        .subscribe()
      this.CustomersService.UpdateCustomer(customer.id, customer)
        .subscribe()
    }
    else{
      if (!customer.name) { return; }
      customer.name = customer.name.trim();
      customer.address = customer.address.trim();
      this.LoginService.AddLogin(login)
        .subscribe(login => {
          this.logins.push(login)
        })
      this.GetLoginByEmail(login.email)
      await (this.delay(500))
      customer.loginId = this.login.id
      this.CustomersService.AddCustomer(customer)
        .subscribe(customer => {
          this.customers.push(customer)
        })
    }
    await this.delay(500);
    this.GetCustomers();
  }

  DeleteCustomer(customer: Customer): void {
    if(confirm("Er du sikker")){
    this.GetLogin(customer.loginId)
    
    
    this.customers = this.customers.filter(h => h !== customer);
    this.CustomersService.DeleteCustomer(customer).subscribe();
    this.LoginService.DeleteLogin(this.selectedLogin).subscribe();
  }
  }

  //#endregion

  //#region CRUD Orders

  GetOrders(id: number): void{
    this.OrderService.GetOrders(id)
      .subscribe(orders => this.orders = orders)
  }

  AddOrder(order: Order): void{
    order.statusId = 1;
    order.customerId = 46;
    this.OrderService.AddOrders(order)
      .subscribe(order => {
        this.orders.push(order)});
  }

  //#endregion
}
