import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  laungageSelector: string;
  
  constructor(private cs : MailServiceService) {

    
  }

  ngOnInit() {
    this.laungageSelector = "EN";
  }

  onDutch(){
    this.laungageSelector = "NL";
  }

  onFrench(){
    this.laungageSelector = "FR";
  }

  onEnglish(){
    this.laungageSelector = "EN";
  }

}
