import {Injectable} from "@angular/core";
import {Order} from "../../models/order/order";
import {CropProvider} from '../crops/crops';
import {Crop} from '../../models/crop/crop';

@Injectable()
export class OrderProvider {
    orders: Order[] = [];

    crops : Crop[];

    constructor(cp: CropProvider) {
        //cp.generateCrops();
        this.crops = cp.getCrops();
        this.generateOrders();
    }

    generateOrders(){
        let crop = this.crops[1];
        let num = 2;
        let price = 0.76;
        let a = new Order(crop, price, num, "3456345b6n3456", false);
        this.orders.push(a);

        crop = this.crops[2];
        num = 5;
        price = 1.5;
        a = new Order(crop, price, num, "g23647bn3456h345", true);
        this.orders.push(a);

        crop = this.crops[4];
        num = 10;
        price = 3.5;
        a = new Order(crop, price, num, "345g3425235g4565", true);
        this.orders.push(a);
    }

    getOrders(){
        return this.orders;
    }

    add(a){
        this.orders.push(a);
    }

}
