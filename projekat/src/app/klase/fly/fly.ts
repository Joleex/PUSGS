import { idLocale } from 'ngx-bootstrap/chronos/i18n/id';
import { Time } from '@angular/common';
import { Data } from 'ngx-bootstrap/positioning/models';

export class Fly {
    from: string;
    to: string;
    date: string;
    timeOfDepartures: number;
    timeOfArrivals: number;
    numberOfConnection: number;
    lengthOfFly: number;
    price: number;

    constructor(from: string, to: string, date: string, timeOfDepartures: number, timeOfArrivals: number, numberOfConnection: number, lengthOfFly: number, price: number){
        this.from=from;
        this.to=to;
        this.date=date;
        this.timeOfDepartures=timeOfDepartures;
        this.timeOfArrivals=timeOfArrivals;
        this.numberOfConnection=numberOfConnection;
        this.lengthOfFly=lengthOfFly;
        this.price=price;
    }
}
