import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  img = [];
  cols = 1;
  rows = "1:2";
  
  constructor(private cs : MailServiceService) {

    
  }

  update(variable: string) {
    console.log(variable);
    this.cs.updatePassedVar(variable);
  }

  ngOnInit() {
    if(window.innerWidth > 0 && window.innerWidth < 768){
      this.cols = 1;
    }
    if(window.innerWidth >= 768 && window.innerWidth < 1024){
      this.cols = 2;
    }
    if(window.innerWidth >= 1024 && window.innerWidth < 1440){
      this.cols = 3;
    }
    else if(window.innerWidth >= 1440){
      this.cols = 4;
    } 
  
  }

  onResize(event) {

    if(event.target.innerWidth > 0 && event.target.innerWidth < 768){
      this.cols = 1;
    }
    if(event.target.innerWidth >= 768 && event.target.innerWidth < 1024){
      this.cols = 2;
    }
    if(event.target.innerWidth >= 1024 && event.target.innerWidth < 1440){
      this.cols = 3;
    }
    else if(event.target.innerWidth >= 1440){
      this.cols = 4;
    } 

   
  }

}
