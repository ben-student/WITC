import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LibraryComponent } from './library/library.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/portfolio' },
  {path : 'about' , component : AboutComponent},
  {path : 'portfolio' , component : PortfolioComponent},
  {path : 'library' , component : LibraryComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
