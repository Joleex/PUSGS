import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FlyCarComponent } from '../fly-car/fly-car.component';
import { CarComponent } from '../car/car.component';
import { Fly } from 'src/app/klase/fly/fly';
import { AbstractFilterParam } from 'src/app/klase/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/klase/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/klase/number-filter-param/number-filter-param';
import { FlyService } from 'src/app/services/fly.service';
import { FilterParam } from 'src/app/klase/filter-param/filter-param';


@Component({
  selector: 'app-fly',
  templateUrl: './fly.component.html',
  styleUrls: ['./fly.component.css']
})

  
export class FlyComponent implements OnInit {   

  allFlys: Array<Fly>;
  filteredFlys: Array<Fly>;

  minDate: Date;
  radioSelected: string;
  public selectedRadio: string;
  radios: any =[
    'Round-trip',
    'One way',
    'Multi-city'
  ]

  constructor(private flyService: FlyService) { 
    this.selectedRadio="Round-trip";
    this.minDate=new Date();
    this.minDate.getDate(); 
    this.allFlys=this.flyService.loadFlys();
    //this.filteredFlys=this.allFlys;
  }

  radioChangeHandler(event:any){
    this.selectedRadio=event.target.value;
  }

  ngOnInit():void {
  }


  filterFlys():void{
    //sve ovo je za filtriranje kad se klikne na dugme
    let filterParams= new Array<AbstractFilterParam>();

    if(this.getFilterFieldValue("flyFromFilter")){
      filterParams.push(this.addFlyFromFilterParam());
    }
    if(this.getFilterFieldValue("flyToFilter")){
      filterParams.push(this.addFlyToFilterParam());
    }
    if(this.getFilterFieldValue("flyDateFilter")){
      filterParams.push(this.addFlyDateFilterParam());
    }

    this.filteredFlys=this.flyService.filterFlys(this.allFlys, filterParams);
  }

  addFlyFromFilterParam(): ReturnType<any>{
    return new StringFilterParam("flyFromFilter", this.getFilterFieldValue("flyFromFilter"));
  }
  
  addFlyToFilterParam(): ReturnType<any>{
    return new StringFilterParam("flyToFilter", this.getFilterFieldValue("flyToFilter"));
  }
  addFlyDateFilterParam(): ReturnType<any>{
    return new StringFilterParam("flyDateFilter",this.getFilterFieldValue("flyDateFilter"));
  }
  getFilterFieldValue(filterFieldId: string){
    return (<HTMLInputElement> document.getElementById(filterFieldId)).value;
  }
}
