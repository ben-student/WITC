import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder } from '@angular/forms';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  orderForm;
  
  


 
  constructor(private fb : FormBuilder, private ms : MailServiceService) {

    this.orderForm = this.fb.group({
      email: '',
      subject: '',
      text: ''
    });
   }

  ngOnInit(): void {
    
    
  }


  sendOrder(orderData){


   this.ms.sendMail(orderData);

  }

}
