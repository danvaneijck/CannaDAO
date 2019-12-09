import {Injectable} from "@angular/core";
import {Crop} from "../../models/crop/crop";

@Injectable()
export class CropProvider {
    crops: Crop[] = [];

    constructor() {
        this.generateCrops();
    }

    generateCrops(){
        let title = "Widow";
        let num = 2;
        let gen = "White Widow";
        let img = "./assets/nug1.png";
        let a = new Crop(title, gen, num, img, false);
        this.crops.push(a);


        title = "Lemon Haze";
        num = 3;
        gen = "Lemon Haze";
        img = "./assets/nug2.png";
        a = new Crop(title, gen, num, img, true);
        this.crops.push(a);

        title = "Trainwreck";
        num = 3;
        gen = "Trainwreck";
        img = "./assets/nug3.png";
        a = new Crop(title, gen, num, img, true);
        this.crops.push(a);

        title = "OG";
        num = 3;
        gen = "OG Kush";
        img = "./assets/nug4.png";
        a = new Crop(title, gen, num, img, false);
        this.crops.push(a);


        title = "Critical grow";
        num = 10;
        gen = "Critical Plus";
        img = "./assets/nug5.png";
        a = new Crop(title, gen, num, img, true);
        this.crops.push(a);

    }

    getCrops(){
        return this.crops;
    }

    add(a){
        this.crops.push(a);
    }

}
