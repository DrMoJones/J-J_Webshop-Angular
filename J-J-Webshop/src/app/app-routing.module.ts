import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component'

const routes: Routes = [
  {path: 'Shop', component: TilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
