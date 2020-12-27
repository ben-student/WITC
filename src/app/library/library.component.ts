import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private ms : MailServiceService) { }
  images = [];
  product;
  cols;
  ngOnInit(): void {

      

    this.product = this.ms.getProduct()
    for(let i = 0; i<4;i++){
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

}
