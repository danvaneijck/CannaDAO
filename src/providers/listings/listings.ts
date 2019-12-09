import {Injectable} from "@angular/core";
import {Listing} from "../../models/listing/listing"
import {CropProvider} from '../crops/crops';
import {Crop} from '../../models/crop/crop';

@Injectable()
export class ListingProvider {
    listings: Listing[] = [];

    crops : Crop[];

    constructor(cp: CropProvider) {
        this.crops = cp.getCrops();
        this.generateListings();
    }

    generateListings(){
        let crop = this.crops[1];
        let num = 2000;
        let price = 0.05;
        let a = new Listing(crop, price, num);
        this.listings.push(a);

        crop = this.crops[2];
        num = 5000;
        price = 0.075;
        a = new Listing(crop, price, num);
        this.listings.push(a);

        crop = this.crops[4];
        num = 5000;
        price = 0.085;
        a = new Listing(crop, price, num);
        this.listings.push(a);
    }

    getListings(){
        return this.listings;
    }

    add(a){
        this.listings.push(a);
    }

}
