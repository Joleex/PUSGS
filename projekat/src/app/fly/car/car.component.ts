import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  minDate: Date;
  constructor() { 
    this.minDate=new Date();
    this.minDate.getDate();
  }
  ngOnInit(): void {
  }

}
