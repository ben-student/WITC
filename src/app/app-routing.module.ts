import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path : 'orders' , component : OrdersComponent},
  {path : 'about' , component : AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
