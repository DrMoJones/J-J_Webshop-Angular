import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TilesComponent } from './tiles/tiles.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent,
      TilesComponent,
      NavBarComponent,
      UserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
