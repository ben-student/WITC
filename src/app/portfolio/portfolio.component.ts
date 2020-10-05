import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  img = [];
  constructor() {
    this.img[0] = "BADKAMER1.jpg";
    this.img[1] = "BADKAMER2.jpg";
    this.img[2] = "DRANKREK.jpg";
   }

  ngOnInit(): void {
  }

}
