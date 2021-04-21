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
  price:string;
  description:string;
  STOEL:string;

  ngOnInit(): void {

    this.product = this.ms.getProduct();
    for(let i = 0; i<8;i++){
      this.images[i] = `assets/${this.product}${i+1}.jpg`;
      console.log(this.images[i]);
    }

    this.STOEL = "Chairs are pretty difficult to design and make as it needs to look good, be strong enough to bear the weight of a human being and withstand the abuse of the human using it. I tried it with this lounge chair and i am pretty happy with the result. Made out of 48 layers of black MDF and another 3 layers per. Now happily residing in my brothers apartement. As this piece needs to be strong enough I'm still testing it to see if it can stand the test of time. But it will be available soon! If you have any questions, feel free to mail me at Sam.dupont2001@gmail.com with #20192";


    


   

  }

  close(){
    this.dialogRef.close()
  }
}
