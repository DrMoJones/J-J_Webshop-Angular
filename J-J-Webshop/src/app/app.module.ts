import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TilesComponent } from './tiles/tiles.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent,
      TilesComponent,
      NavBarComponent,
      UserComponent,
      CartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
