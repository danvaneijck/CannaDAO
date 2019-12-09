import { Injectable } from '@angular/core';
import {Crop} from "../crop/crop"

@Injectable()
export class Order {
    date;
    crop;
    price;
    quantity;
    buyersAddress;
    rating;
    completed;


    constructor(c: Crop, pr: number, num: number, add: string, comp: boolean) {
        this.crop = c;
        this.price = pr;
        this.date = new Date();
        this.quantity = num;
        this.buyersAddress = add;
        this.completed = comp;
    }

}
