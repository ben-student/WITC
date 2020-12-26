import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../pagestyle.scss']
})
export class AboutComponent implements OnInit {
  cols;

  constructor() { }
  
  ngOnInit(): void {
    if(window.innerWidth > 0 && window.innerWidth < 768){
      this.cols = 1;
    }
    if(window.innerWidth >= 768 && window.innerWidth < 1024){
      this.cols = 2;
    }
    if(window.innerWidth >= 1024 ){
      this.cols = 3;
    }
  }

  onResize(event) {

    if(event.target.innerWidth > 0 && event.target.innerWidth < 768){
      this.cols = 1;
    }
    if(event.target.innerWidth >= 768 && event.target.innerWidth < 1024){
      this.cols = 2;
    }
    if(event.target.innerWidth >= 1024){
      this.cols = 3;
    }
   
  }


}
