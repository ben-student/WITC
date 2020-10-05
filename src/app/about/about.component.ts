import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild(NgxGlideComponent, { static: false }) ngxGlide: NgxGlideComponent;

  constructor() { }
  public play(){
    this.ngxGlide.showBullets = false;
    console.log("playing");
  }
  ngOnInit(): void {
  
  }


}
