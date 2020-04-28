import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  orderForm;
  
  


 
  constructor(private fb : FormBuilder) {

    this.orderForm = this.fb.group({
      name: '',
      addres: ''
    });
   }

  ngOnInit(): void {
    
    
  }


  sendOrder(orderData){


    console.log(orderData.name);
  }

}
