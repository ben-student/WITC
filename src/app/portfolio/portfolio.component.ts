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
  badKamerTxt: string = "Deze badkamer set is gemaakt uit een onderstel van duurzaam hout voor de lavabo. Met daarboven een handige kast bedekt met spiegels";
  kleerKastTxt: string = "een open kleerkast met genoeg plaats om kleren in op te hangen en geplooide kleren in te bergen. Afgemaakt met een koude led verlichting";
  lampTxt :string = "een design lamp die een warme licht geeft. Dit maakt ee bureau of dergelijke sfeervoller"
  stoelTxt : string = "een design stoel. Uniek exemplaar."
  nachtKastTxt : string = "Een simpele maar prachtige nachtkast met weldegelijke openings systeem"
  wakeTimTxt : string = "Open kast speciaal gemaakt voor de persoon die van glijsporten houdt. Kan tot 3 planken ondersteunen met onderaan extra schappen voor bijkomend materiaal aan de sport"
  kastCTxt : string = "Een kast op maat gemaakt voor een persoon die graag zijn materiaal van de brommer netjes en handig opruimt"
  drankTxt :string = "een design manier om flessen alcohol op te bergen."
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
