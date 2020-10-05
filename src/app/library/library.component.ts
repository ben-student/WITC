import { Component, OnInit } from '@angular/core';
import { MailServiceService } from '../mail-service.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  variable;
  constructor(private cs : MailServiceService) { }

  ngOnInit(): void {

      this.variable = this.cs.getVar();

     
      
  }

}
