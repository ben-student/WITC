import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { LibraryComponent } from './library/library.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogProductComponent } from './dialog-product/dialog-product.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FooterComponent } from './footer/footer.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AboutComponent,
    LibraryComponent,
    DialogProductComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatCarouselModule.forRoot(),
    MatChipsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
