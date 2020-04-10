import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FlyCarComponent } from '../fly-car/fly-car.component';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.css']
})


export class FlyComponent implements OnInit {
  radioSelected: string;
  selectedRadio: string='Round-trip';
  radios: any =[
    'Round-trip',
    'One way',
    'Multi-city'
  ]
  
  radioChangeHandler(event:any){
    this.selectedRadio=event.target.value;
  }
  constructor() {
  }

  ngOnInit(): void {
  
  }
}
