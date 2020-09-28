import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from "./cart/cart.component";
import { ProductDescriptionComponent } from "./productDescription/productDescription.component";

const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'description', component: ProductDescriptionComponent},
  {path: 'shop', component: TilesComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
