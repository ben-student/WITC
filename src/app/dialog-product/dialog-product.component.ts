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
  description:string;
  nIMG:number;
  dimensions:string;
  price;
  specification:string[];
  
  
  

  ngOnInit(): void {

    this.product = this.ms.getProduct();

    switch(this.product){
      case '20171-' :
        this.description = "This was one of my earlier pieces, after a prototype I changed the design a bit and worked with other woods. I used the combination of Meranti plywood and hardwood. Fitted with soft close ball bearing drawer slides for a smooth and soothing motion. Treated with Rubio monocoat, a natural oil."
        this.dimensions = "D40xL45xH60 (centimeters)"
        this.specification = ["-Meranti hardwood and Meranti plywood", "-Ball-bearing, soft-close drawer slides" , "-Treatment: Rubio monocoat"]
        this.price = 250
        this.nIMG = 9
        break;
      case '20181-' : 
        this.description = "A minimal open closet with two drawers. Made with MDF and Meranti hardwood. Curves are the main focus on this closet. I like curves because there is no machine that makes you perfect curves, it’s all about smoothing out the curves so they look perfect. "
        this.dimensions = "45xL180xH145 (centimeters)"
        this.specification = ["-MDF", "-Ball-bearing, soft-close drawer slides" , "-Treatment: Rubio monocoat"]
        this.price = 'NA'
        this.nIMG = 9
        break;
      case '20191-' : 
        this.description = "First prototype of a small desklamp made with plywood and brass. Simple yet elegant. I am still working on this piece as the first prototype was a little rough around the edges. So more coming soon! "
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 21
        break;
      case '20192-' : 
        this.description = "Chairs are difficult to design and make as they need to look good and be strong enough to withstand the abuse of using it and sitting in it. This lounge chair is a prototype, made out of 48 layers of black MDF and brass details. It is still in it’s testing fase but will be available soon."
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 14
        break;
      case '20202-' : 
        this.description = "This piece actually was not planned, A client was interested in piece #20181 but she wanted to put it against a slanted wall, wich would look weird. So i designed this piece wich has a more open top wich makes for a smoother coherence between the slanted wall and the closet. Made with high quality beech plywood and beech hardwood."
        this.dimensions = "D40xL110xH145 (centimeters)"
        this.price = '450'
        this.nIMG = 14
        break;  
      case '20203-' : 
        this.description = "This sidetable was a collaboration between myself and Zoë Engels (@zoeetpita on ig). She designed this piece for school and I helped her make it. We decided to take it into production as her school gave her the advice to do so. By buying this piece you support not one but two hardworking students."
        this.dimensions = "D40xL40xH50 (centimeters)"
        this.price = 'NA'
        this.nIMG = 37
        break;
      case 'custom1-' : 
        this.description = "These are stands for some antiques i had laying around. These are pretty tricky to make sometimes wich makes for a great learning experience for me. I can't put a price on these as they are so specific but we can work out a price together."
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 5
        break;
      case 'custom2-' : 
        this.description = "Pictureframe out of ipé. I have made a bunch of pictureframes and as the sizes differ, i can't put a price on these. So if you have a poster laying around in need of some love, send me a mail at sam.dupont2001@gmail.com for details and price."
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 7
        break;
      case 'custom3-' : 
        this.description = "A simple and sleek headphonestand made out of a leftover of padouk. As this is very specific, i will not put a price on it but sent me a mail at sam.dupont2001@gmail.com if you wan't something similar"
        this.dimensions = "NA"
        this.price = 250
        this.nIMG = 3
        break;
      case 'custom4-' : 
        this.description = "A bespoke record player cover for and old Lenco L75. Made with meranti hardwood and plexiglas and treated with teak oil. "
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 9
        break;
      case 'custom6-' : 
        this.description = "A bespoke closet for storing bike related items like jackets, helmets, and gloves. Special stands made to fit the inside curves of the helmet, a handy door to run power cables thru to charge a Bluetooth radio. Made with meranti plywood and meranti hardwood."
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 21
        break;
      case 'custom7-' : 
        this.description = "A new stand for a Lenco L75. Inspired by suspension bridges. The suspension by steel cables act as an antishock. Record players need to have some way of reducing vibrations to avoid the needle bouncing on the records. Made with French oak and Afromosia, steel cables and inox hardware. Treated with danish oil."
        this.dimensions = "NA"
        this.price = 'NA'
        this.nIMG = 27
        break;
    }

    for(let i = 0; i<this.nIMG;i++){
      console.log(this.product);
      this.images[i] = `assets/${this.product}${i+1}.jpg`;
      console.log(this.images[i]);
    }

  }

  close(){
    this.dialogRef.close()
  }


}
