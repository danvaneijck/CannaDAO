import { Injectable } from '@angular/core';

@Injectable()
export class Crop {
    title;
    genetics;
    startDate;
    numPlants;
    image;
    completed;

    constructor(t: string, gen: string, num: number, img: string, comp: boolean) {
        this.title = t;
        this.genetics = gen;
        this.startDate = new Date();
        this.numPlants = num;
        this.image = img;
        this.completed = comp;
    }

}
