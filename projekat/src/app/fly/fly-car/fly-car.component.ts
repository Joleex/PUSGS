import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fly-car',
  templateUrl: './fly-car.component.html',
  styleUrls: ['./fly-car.component.css']
})
export class FlyCarComponent implements OnInit {
  minDate: Date;
  constructor() { 
    this.minDate=new Date();
    this.minDate.getDate();
  }

  ngOnInit(): void {
  }

}
