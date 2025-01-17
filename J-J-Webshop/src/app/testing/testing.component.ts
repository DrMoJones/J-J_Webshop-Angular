import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../Services/genre.service';
import { Genre } from '../Models/Genre';
import { Product } from '../Models/Product';
import { ProductsService } from '../Services/products.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  products: Product[];
  product: Product;
  genres: Genre[];
  genre: Genre;
  genreEdit: boolean;


  constructor(
    private GenreService: GenreService,
    private ProductService: ProductsService,
    private route: ActivatedRoute, 
    private location: Location
    ) { }

  ngOnInit(): void {
    this.genreEdit = false;
    this.GetGenres();
    this.GetProducts();
  }

  genreEditChange(){
    if (this.genreEdit == false) { this.genreEdit = true}
    else (this.genreEdit = false); 
    console.log(this.genreEdit);
  }

  GetProducts(){
    this.ProductService.GetProducts()
      .subscribe(products => this.products = products)
  }

  GetProduct(id: number){
    this.ProductService.GetProduct(id)
      .subscribe(product => this.product = product)
  }

  DeleteProduct(product: Product): void{
    this.products = this.products.filter(h => h !== product);
    this.ProductService.DeleteProduct(product).subscribe();    
  }

  AddProduct(product: Product): void{
    product.name = product.name.trim();
    if (!product.name) { return; }
    this.ProductService.AddProducts(product)
      .subscribe(product => {
        this.products.push(product)
      })
  }

  //#region CRUD genres
  GetGenres(): void {
    this.GenreService.GetGenres()
      .subscribe(genres => this.genres = genres)
  }

  GetGenre(id: number): void {
    this.GenreService.GetGenre(id)
      .subscribe(genre => this.genre = genre)
  }

  Add(genreName: string): void{
    genreName = genreName.trim();
    if (!genreName) { return; }
    this.GenreService.AddGenre({ genreName } as Genre)
      .subscribe(genre => {
        this.genres.push(genre)
      })
  }

  Update(id: number, genreName: string): void {
    genreName = genreName.trim();
    //var test: number = +id;
    if (!genreName) { return; }
    this.GenreService.UpdateGenre(id, {id, genreName} as Genre)
      .subscribe()  
  }


  Delete(genre: Genre): void{
    this.genres = this.genres.filter(h => h !== genre);
    this.GenreService.DeleteGenre(genre).subscribe();
    
    //this.GetGenres();
  }
  //#endregion
}
