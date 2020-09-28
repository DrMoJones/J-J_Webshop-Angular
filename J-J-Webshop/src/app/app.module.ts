import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TilesComponent } from './tiles/tiles.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { ProductDescriptionComponent } from './productDescription/productDescription.component';
import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TilesComponent,
    NavBarComponent,
    UserComponent,
    CartComponent,
    TestingComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
