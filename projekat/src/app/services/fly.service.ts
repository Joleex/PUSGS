import { Injectable } from '@angular/core';
import { Fly } from '../klase/fly/fly';
import { AbstractFilterParam } from '../klase/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from '../klase/string-filter-param/string-filter-param';
import { NumberFilterParam } from '../klase/number-filter-param/number-filter-param';
import { FilterParam } from '../klase/filter-param/filter-param';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class FlyService {

  constructor() { }

  loadFlys(){
    console.log('Ucitavanje letova...');
    return this.mockedFlys();
  }

  filterFlys(allFlys:Fly[], filterParams: AbstractFilterParam[]):Fly[]{

    let filteredFlys = new Array<Fly>();

    for(const fly of allFlys){

      let addFly = true;

      for(const filterParam of filterParams){

        if(this.checkFlyFromFilter(fly, filterParam)){
          
          addFly=false;
          console.log(fly.from + ' ' + fly.to+ ' ne zadovoljava vrednost polja flyFromFilter');
          break;
        }
        if(this.checkFlyToFilter(fly,filterParam)){
          addFly=false;
          console.log(fly.from+ ' ' +fly.to+ ' ne zadovoljava vrednosti polja flyT0Filter');
          break;
        }
        if(this.checkFlyDateFilter(fly, filterParam)){
          addFly=false;
          console.log(fly.from + ' '+ fly.to+' ne zadovoljava vrednosti polja flyDateFilter');
          break;
        }
      }
      if(addFly)
        filteredFlys.push(fly);
    }
    return filteredFlys;
  }
  checkFlyFromFilter(fly: Fly, filterParam: AbstractFilterParam):boolean{
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName()==='flyFromFilter' && !fly.from.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkFlyToFilter(fly: Fly, filterParam: AbstractFilterParam): boolean{
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName()==='flyToFilter' && !fly.to.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkFlyDateFilter(fly: Fly, filterParam: AbstractFilterParam): boolean{
    return filterParam instanceof Date && filterParam.getFilterParamName()==='flyDateFilter';
  }

  mockedFlys(): Array<Fly>{
    let allFlys = new Array<Fly>();

    const c1=new Fly('Belgrade','Bergen','5/5/2020',18,20,1,5,350);
    const c2= new Fly('Belgrade','Brussel','5/23/2020',10,12,1,2,200);
    const c3= new Fly('Brussel','Belgrade','6/12/2020',9,11,1,2,233);

    allFlys.push(c1);
    allFlys.push(c2);
    allFlys.push(c3);

    return allFlys;
  }
}