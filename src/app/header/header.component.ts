import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../pagestyle.scss']
})
export class HeaderComponent implements OnInit {

  logo = '/assets/logo.jpg';
 

  constructor() { }

  ngOnInit(): void {
  }

}
