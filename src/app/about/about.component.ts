import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
