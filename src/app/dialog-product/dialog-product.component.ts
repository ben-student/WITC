import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MailServiceService } from '../mail-service.service';
@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.scss']
})
export class DialogProductComponent implements OnInit {
  cols;
  constructor(private dialogRef: MatDialogRef<DialogProductComponent>,private ms : MailServiceService) { }
  images = [];
  product;

  ngOnInit(): void {

    this.product = this.ms.getProduct();
    for(let i = 0; i<8;i++){
      this.images[i] = `assets/${this.product}${i+1}.jpg`;
      console.log(this.images[i]);
    }


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
  close(){
    this.dialogRef.close()
  }
}
