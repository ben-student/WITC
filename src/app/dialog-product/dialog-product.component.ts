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
  product:string;

  
  

  ngOnInit(): void {

    this.product = this.ms.getProduct();
    for(let i = 0; i<25;i++){
      this.images[i] = `assets/${this.product}${i+1}.jpg`;
      console.log(this.images[i]);
    }

    


    


   

  }

  close(){
    this.dialogRef.close()
  }
}
