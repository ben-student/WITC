import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component'
import { LibraryComponent } from './library/library.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/product' },
  {path : 'product' , component : ProductComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'library' , component : LibraryComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
