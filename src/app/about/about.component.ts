import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import { MailServiceService } from '../mail-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../pagestyle.scss']
})
export class AboutComponent implements OnInit {
  cols;

  constructor(private dialog: MatDialog, private ms : MailServiceService,private router :Router) { }
  
  ngOnInit(): void {
    if(window.innerWidth > 0 && window.innerWidth < 768){
      this.cols = 1;
    }
    if(window.innerWidth >= 768 && window.innerWidth < 1024){
      this.cols = 2;
    }
    if(window.innerWidth >= 1024 ){
      this.cols = 3;
    }
  }

  onResize(event) {

    if(event.target.innerWidth > 0 && event.target.innerWidth < 768){
      this.cols = 1;
    }
    if(event.target.innerWidth >= 768 && event.target.innerWidth < 1024){
      this.cols = 2;
    }
    if(event.target.innerWidth >= 1024){
      this.cols = 3;
    }
   
  }

  openDialogProduct(product:string){
    
    console.log(product);
    this.ms.storeProduct(product);

    
    const dialogRef = this.dialog.open(DialogProductComponent, {
      height: '700px',
      width: '600px'
    });

    // this.router.navigate(['/library']);
  }


}
