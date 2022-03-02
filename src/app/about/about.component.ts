import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public myColor = 'red';
  public counter = 0;
  public counterBP = 0;
  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBP = this.common.binhPhuong(this.counter);
  }

  public changeColor(event : any): void{   
    this.myColor = event; 
    console.log("Click myColor", this.myColor);
  }
}
