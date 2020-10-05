import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  img = [];
  cols = 1;
  rows = "1:2";
  badKamerTxt: string = "Deze badkamer set is gemaakt uit een onderstel van duurzaam hout voor de lavabo."
  kleerKastTxt: string;
  lampTxt :string;
  StoelTxt : string;
  nachtKastTxt : string;
  constructor() {

    this.img[0] = "BADKAMER1.jpg";
    this.img[1] = "BADKAMER2.jpg";
    this.img[2] = "DRANKREK.jpg";
  }

  update(variable: string) {
    console.log(variable);
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
    //this.rows = (window.innerWidth <= 400) ? 1 : 1;
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

    console.log(event.target.innerWidth);
    console.log(this.cols);
    //this.rows = (event.target.innerWidth <= 400) ? 1 : 1000;
  }

}
