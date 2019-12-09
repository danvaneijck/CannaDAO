import { Injectable } from '@angular/core';
import {Crop} from "../crop/crop"

@Injectable()
export class Listing {
    date;
    crop;
    price;
    quantity;


    constructor(c: Crop, pr: number, num: number) {
        this.crop = c;
        this.price = pr;
        this.date = new Date();
        this.quantity = num;
    }

}
